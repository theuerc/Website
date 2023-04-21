<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { ManifestoItems } from "$lib/contents/cde-manifesto";
  import List from "$lib/components/cde/list.svelte";
  import Explore from "$lib/components/explore.svelte";
  import Whitepaper from "$lib/components/cde/whitepaper.svelte";
  import Hero from "$lib/components/cde/hero.svelte";
  import IntegrateDontDictate from "$lib/components/index/integrate-dont-dictate.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
</script>

<OpenGraph
  data={{
    title: "CDEs: Cloud Development Environments by Gitpod",
    description:
      "CDEs are pre-configured with tools, libraries, and dependencies developers need to write, test and review code. Duplicate and share these workspaces seamlessly across teams.",
  }}
/>

<Hero
  title="Cloud development environments"
  text="CDEs are pre-configured with tools, libraries, and dependencies developers need to write, test and review code. Duplicate and share these workspaces seamlessly across teams."
  image={{
    src: "/images/cde/hero.png",
    alt: "Spawning new development environments on click",
    darkSrc: "/images/cde/hero-dark.png",
  }}
  btnPrimary={{
    text: "Get a demo",
    href: "/contact/get-demo",
  }}
/>
<List manifestoItems={ManifestoItems} />
<IntegrateDontDictate class="py-small" />
<Whitepaper />
<Explore
  contents={{
    title: "Open a workspace today",
    description: "Spin up a pre-configured development environment in seconds.",
  }}
/>
