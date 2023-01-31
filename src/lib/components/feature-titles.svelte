<script lang="ts">
  import type { FeatureTitle as FeatureTitleProps } from "$lib/types/feature-title";
  import FeatureTitle from "./feature-title.svelte";

  export let featureTitles: FeatureTitleProps[];
  export let swap: boolean = false;
  export let featureTitlePadding: string = "px-macro py-xx-small sm:p-x-small";
</script>

<div
  class="grid grid-cols-2 lg:grid-cols-4 gap-macro sm:gap-micro max-w-[608px] lg:flex lg:justify-center mx-auto relative"
>
  <img
    src="/images/startups/kumquat-right.png"
    alt="Gitpod Kumquat"
    class="absolute hidden -z-10 md:block -left-[44px] -top-[16px] lgx:left-[-85px] lgx:top-[-30px] h-16 lgx:h-32 lgx:w-36"
  />
  {#each featureTitles as featureTitle}
    <FeatureTitle
      featureTitle={{ ...featureTitle, swap }}
      {featureTitlePadding}
    />
  {/each}
  <img
    src="/images/startups/kumquat-left.png"
    alt="Gitpod Kumquat"
    class="absolute hidden -z-10 md:block top-[110px] lgx:top-[82px] right-[-60px] lgx:right-[-112px] h-16 lgx:h-32 lgx:w-36"
  />
</div>
