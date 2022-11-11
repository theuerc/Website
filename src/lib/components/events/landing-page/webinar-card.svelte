<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  export let webinar: {
    title: string;
    text: string;
    image: string;
    alt: string;
    href: string;
  };
</script>

<a sveltekit:prefetch class="no-underline" href={webinar.href}>
  <Card
    size="small"
    class="p-xx-small hover:shadow-normal transition-all duration-200 delay-[50ms] flex flex-col overflow-hidden w-full h-full max-w-sm"
  >
    <div class="-mt-xx-small -mx-xx-small">
      <img
        class="w-full h-full object-cover"
        src={webinar.image}
        alt={webinar.alt}
      />
    </div>
    <div class="-mx-xx-small mt-[2.5rem]">
      <div class="px-xx-small">
        <h3 class="!mb-micro">
          {webinar.title}
        </h3>
        <p class="text-p-medium text-body">
          {@html webinar.text}
        </p>
      </div>
    </div>
  </Card>
</a>
