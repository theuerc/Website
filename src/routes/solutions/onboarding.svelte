<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { onboardFeatures } from "$lib/contents/home/features";
  import Quotes from "$lib/components/quotes.svelte";
  import { quotes } from "$lib/contents/customers";
  import Features from "$lib/components/features.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Section from "$lib/components/section.svelte";
  import Quote from "$lib/components/solutions/quote.svelte";
  import AnimatedLogos from "$lib/components/animated-logos.svelte";
  import Explore from "$lib/components/explore.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod gives a perfect development environment to everyone on the team.",
    title: "Solution: Onboarding - Gitpod",
    keywords:
      "cloud development environment, cde, remote development, developer experience, onboarding",
  }}
/>

<div class="flex flex-col lg:flex-row lg:pt-x-large">
  <div
    class="items-center justify-between max-w-7xl py-micro md:py-xx-large mx-auto my-macro"
  >
    <h2 class="h1 !mb-micro md:!mb-x-small max-w-2xl">
      Onboarding made simple
    </h2>
    <p class="text-large max-w-lg mb-xx-small">
      Get developers ready-to-code quickly and easily, from anywhere in the
      world, on any machine.
    </p>
  </div>
  <Quote
    quote="
    You can either spend 3 days of your life setting them up and teaching them how the environment works, or you can give them a button and say ‘click here’.&nbsp;"
    author={{
      name: "Josep Jaume",
      jobTitle: "Senior Director of Developer Experience at Factorial",
    }}
    svgClazz="h-10 w-32"
  />
</div>
<div class="mt-xxx-large mb-x-large sm:mb-0">
  <AnimatedLogos title="Speeding up 900k+ developers at teams like" />
</div>
<Section id="new-hire-to-coding-in-under-an-hour">
  <h3 class="text-center text-3xl sm:text-5xl font-bold">
    Productive teams on day one
  </h3>
  <Features features={onboardFeatures} class="!mt-x-large" />
</Section>
<Section>
  <Quotes {quotes} class="max-w-7xl mx-auto" />
</Section>
<Explore />
