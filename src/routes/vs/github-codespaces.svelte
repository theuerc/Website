<script context="module">
  export const prerender = true;
</script>

<script>
  import CalloutSecondary from "$lib/components/callout-secondary.svelte";
  import FeatureBox from "$lib/components/feature-box.svelte";
  import Header from "$lib/components/header.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Section from "$lib/components/section.svelte";
  import FeatureTable from "$lib/components/ui-library/feature-table/feature-table.svelte";
  import {
    automationFirstFeature,
    codespacesComparison,
  } from "$lib/contents/codespaces";
  import { openSourceFeature } from "$lib/contents/jetbrains-space";
  import idesSvelte from "$lib/components/svgs/ides.svelte";
  import FeatureBoxes from "$lib/components/vs/feature-boxes.svelte";
  import Combined from "$lib/components/vs/combined.svelte";
  import VerticalFeature from "$lib/components/vertical-feature.svelte";
  import { carbonNeutralFeature } from "$lib/contents/home/features";
</script>

<OpenGraph
  data={{
    description:
      "Why choose Gitpod over GitHub Codespaces? Gitpod is the faster, more resource-efficient, open-source alternative that integrates with your individual stack.",
    title: "Gitpod vs GitHub Codespaces - what makes Gitpod different?",
    keywords: "Codespaces, alternative, differences",
  }}
/>

<Header
  title="Gitpod vs GitHub Codespaces"
  text="Gitpod is the faster, more resource-efficient, open-source platform that
  integrates with your individual stack."
  tight={true}
/>

<FeatureBoxes>
  <FeatureBox
    feature={{
      title: "Your environment, your tools, your&nbsp;craft",
      paragraph:
        "Bring your IDE and connect your Git provider of choice. Gitpod natively integrates with a lot of tools and avoids single vendor lock-in. Give your team the power to choose their own tools with Gitpod.",
      previewComponent: idesSvelte,
    }}
  />

  <FeatureBox
    feature={{
      title: "Resource Efficient",
      paragraph:
        "Instead of running on expensive VMs, Gitpod provisions secure containers and achieves best-in-class resource-efficiency with scalable workspaces running on shared high-powered cloud servers. <a href='https://www.researchgate.net/publication/333096446_Reduced_carbon_emission_and_optimized_power_consumption_technique_using_container_over_virtual_machine' target='_blank'>Helping our planet</a> 🌱.",
      image: {
        src: "/images/github-codespaces/VMs.webp",
        darkSrc: "/images/github-codespaces/VMs.webp",
        alt: "GitHub Codespaces using Virtual Machines",
        classNames: "rounded-5xl w-80 h-auto",
      },
    }}
  />
</FeatureBoxes>

<Section>
  <h2 class="text-center mb-x-small md:mb-small">Compare features</h2>
  <FeatureTable tableData={codespacesComparison} />
</Section>

<CalloutSecondary
  title="Ready to feel the difference?"
  text="Spin up an example workspace now, just link your git provider"
/>

<Combined>
  <FeatureBox feature={openSourceFeature} slot="top" />
  {#each [automationFirstFeature, carbonNeutralFeature] as verticalFeatureData}
    <VerticalFeature {verticalFeatureData} fullWidth={true} headingLevel="h2" />
  {/each}
</Combined>
