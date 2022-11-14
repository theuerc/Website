<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import LinkButton from "$lib/components/ui-library/link-button/link-button.svelte";
  export let webinar: {
    isInPast: boolean;
    text: string;
    image: string;
    alt: string;
    href: string;
  };
</script>

<Card
  size="small"
  class="p-xx-small transition-all duration-200  delay-[50ms] flex flex-col overflow-hidden w-full max-w-sm"
>
  <div class="-mt-xx-small -mx-xx-small">
    <img class="w-full  object-cover" src={webinar.image} alt={webinar.alt} />
  </div>
  <div class="-mx-xx-small mt-[2.5rem] h-full">
    <div class="px-xx-small flex flex-col h-full justify-between">
      <p class="text-p-medium text-body">
        {@html webinar.text}
      </p>
      <div>
        <LinkButton
          class="mt-micro"
          sveltekit:prefetch
          size="medium"
          href={webinar.href}
          variant={webinar.isInPast ? "cta" : "primary"}
          >{webinar.isInPast ? "Watch recording" : "Sign up now"}</LinkButton
        >
      </div>
    </div>
  </div>
</Card>
