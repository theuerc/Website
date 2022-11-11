<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import LinkButton from "$lib/components/ui-library/link-button";
  export let conference: {
    title: string;
    text: string;
    buttonText?: string;
    img: string;
    imgDark?: string;
    href?: string;
    alt: string;
  };
</script>

<Card
  class="flex flex-col w-full gap-xx-small max-w-sm py-small justify-between px-xx-small md:px-x-small"
  size="small"
  ><div class="flex flex-col items-center">
    <img
      class="w-44 dark:hidden h-16 mb-x-small"
      src={conference.img}
      alt={conference.alt}
    />
    {#if conference.imgDark}
      <img
        class="w-44 hidden dark:block h-16 mb-x-small"
        src={conference.imgDark}
        alt={conference.alt}
      />
    {/if}
    <h3 class="h3 !mb-micro">{conference.title}</h3>
    <p class="text-center">
      {conference.text}
    </p>
  </div>
  {#if conference.buttonText}
    <div class="flex justify-center">
      <LinkButton href={conference.href} variant="cta" size="large"
        >{conference.buttonText}</LinkButton
      >
    </div>
  {/if}
</Card>
