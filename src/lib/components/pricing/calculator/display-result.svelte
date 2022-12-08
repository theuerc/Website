<script lang="ts">
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte";
  export let members: number;
  export let displayValue: number;
</script>

<div class="flex flex-col">
  <p class="font-bold text-body">For all members per month</p>
  <p class="text-grey">(excl. VAT)</p>
  <p class="h2 mt-micro font-bold text-important !mb-small">
    {members >= 100
      ? "custom"
      : `$${displayValue
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
  </p>
  <p>Get started by creating your team. Only pay what you use.</p>
  <div class="mt-micro">
    {#if members >= 100}
      <p>
        For large teams of 100+, please contact sales to receive a custom quote.
      </p>
      <br />
      <LinkButton variant="primary" size="large" href="/contact/sales">
        Talk to Sales
      </LinkButton>
    {:else}
      <LinkButton href="#" variant="primary" size="large"
        >Create team for free</LinkButton
      >
    {/if}
  </div>
</div>
