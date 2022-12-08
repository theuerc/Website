<script lang="ts">
  import type { Form } from "$lib/types/form";
  import Input from "$lib/components/ui-library/input/input.svelte";
  import { tick } from "svelte";
  import { scrollToElement } from "$lib/utils/helpers";
  import Button from "$lib/components/ui-library/button/button.svelte";
  import Checkbox from "$lib/components/ui-library/checkbox";

  export let members: number;
  export let hours: number;
  export let largeWorkspaces: number;
  export let sectionStart: HTMLElement;
  export let calculatedAmount: number;

  const formData: Form = {
    email: {
      el: null,
      valid: false,
      value: "",
    },
    consent: {
      el: null,
      valid: false,
      checked: false,
    },
  };

  let isFormDirty = false;
  export let isEmailSent = false;
  let isSubmissionInProgress: boolean = false;
  $: isFormValid = Object.values(formData).every((field) => field.valid);

  const handleSubmit = async () => {
    isFormDirty = true;
    if (!isFormValid) {
      await tick();
      scrollToElement(sectionStart, ".error");
      return;
    }
    isSubmissionInProgress = true;

    try {
      const response = await fetch("/api/estimate-costs", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email.value,
          teamMembers: members,
          workspaceHours: hours,
          largeWorkspaces: `${largeWorkspaces}%`,
          calculated: calculatedAmount.toFixed(0),
        }),
      });

      if (response.ok) {
        isEmailSent = true;
        localStorage.setItem("estimated-costs-submitted", "true");
        isSubmissionInProgress = false;
        setTimeout(() => {
          sectionStart.scrollIntoView({
            block: "center",
            inline: "center",
          });
        });
      } else if (response.status === 409) {
        isSubmissionInProgress = false;
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      isSubmissionInProgress = false;
      console.error(error);
    }
  };
</script>

<style lang="postcss">
  div :global([type="checkbox"] + label span) {
    @apply border-[#999795];
  }

  div :global(.error *) {
    @apply !border-error text-error;
  }
</style>

<div>
  <p class="text-important font-bold">Enter work email to view estimate</p>
  <p class="mb-micro">We’ll send you a summary of your options</p>
  <form on:submit|preventDefault={handleSubmit}>
    <Input
      hasError={isFormDirty && !formData.email.valid}
      id="email"
      class="mb-xx-small  border-[#999795] bg-transparent"
      name="email"
      bind:value={formData.email.value}
      bind:element={formData.email.el}
      type="email"
      autocomplete="email"
      on:change={() => {
        formData.email.valid =
          formData.email.value && formData.email.el.checkValidity();
      }}
    />
    <Checkbox
      class=""
      hasError={isFormDirty && !formData.consent.valid}
      label="<p>I consent to having this website store my submitted information. <a class='!underline' href='/privacy'>More on privacy policy</a></p>"
      bind:checked={formData.consent.checked}
      bind:element={formData.consent.el}
      on:change={() => {
        formData.consent.valid =
          formData.consent.checked && formData.consent.el.validity.valid;
      }}
      textClassName="text-sm"
    />
    <Button
      class="mt-x-small"
      variant="primary"
      size="large"
      type="submit"
      isLoading={isSubmissionInProgress}
      disabled={(isFormDirty && !isFormValid) || isSubmissionInProgress}
      >See cost estimate now</Button
    >
  </form>
</div>
