<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import {
    featureCards,
    integrateFeatures,
    otherFeatures,
    quotes,
  } from "$lib/contents/enterprise";
  import Section from "$lib/components/section.svelte";
  import Quotes from "$lib/components/quotes.svelte";
  import SectionCommon from "$lib/components/section-common.svelte";
  import CardSmall from "$lib/components/card/card-small.svelte";
  import Integrate from "$lib/components/enterprise/integrate.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Hero from "$lib/components/hero.svelte";
  import Explore from "$lib/components/explore.svelte";
  import SectionFeatures from "$lib/components/section-features.svelte";
  import AnimatedLogos from "$lib/components/animated-logos.svelte";
  import Titles from "$lib/components/index/titles.svelte";
  import Pill from "$lib/components/pill.svelte";
</script>

<OpenGraph
  data={{
    title: "Gitpod for enterprises",
    description:
      "Gitpod remote developer environments help enterprises ship faster and more securely. Engineering teams improve onboarding, collaboration, and security using Gitpod.",
    keywords:
      "cloud dev environment, remote development, developer onboarding, developer collaboration, cloud development, VDI, Gitpod for enterprise, enterprise, dedicated, gitpod dedicated",
  }}
/>

<Hero
  subtitle="Enterprise"
  title="Engineering orgs get more done with CDEs"
  text="Consistent developer experience, improved collaboration, higher security, more software shipped."
  image={{
    src: "/images/enterprise/enterprise-hub.webp",
    alt: "Enter Rug",
    isCut: true,
  }}
  btnPrimary={{
    text: "Get a demo",
    href: "/contact/get-demo",
  }}
  btnSecondary={{
    text: "View pricing",
    href: "/pricing",
  }}
/>

<AnimatedLogos />
<Titles />
<SectionCommon title="Deployment options">
  <div
    class="flex flex-wrap justify-center mt-small max-w-5xl mx-auto"
    slot="content"
  >
    {#each featureCards as card}
      <CardSmall
        class="m-macro px-xx-small relative"
        card={card.card}
        titleClassNames="h5"
      >
        {#if card.pill}
          <Pill
            class="absolute right-x-small -top-2"
            variant={card.pill.variant}
            text={card.pill.text}
          />
        {/if}
      </CardSmall>
    {/each}
  </div>
</SectionCommon>
<SectionFeatures
  title="Ship faster, and more securely."
  features={otherFeatures}
/>

<Section>
  <Quotes {quotes} />
</Section>
<Integrate features={integrateFeatures} />
<Explore
  contents={{
    title: "Get started",
    link: {
      href: "/contact/sales?subject=enterprise",
      text: "Contact sales",
    },
    secondaryLink: null,
    description:
      "Spin up fresh, automated dev environments for each task, in the cloud, in seconds.",
  }}
/>
