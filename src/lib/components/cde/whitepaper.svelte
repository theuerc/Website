<script lang="ts">
  import Download from "$lib/components/whitepaper/cloud-dev-environments/download.svelte";
  import Section from "$lib/components/section.svelte";
  import WhitepaperInfo from "./whitepaper-info.svelte";
</script>

<Section class="flex flex-col items-center flex-wrap">
  <div class="w-full mx-auto mb-micro sm:mb-small">
    <WhitepaperInfo
      title="CDEs for large teams"
      description="Curious why many of the largest companies have adopted CDEs? This white paper explores CDE benefits for engineering teams."
      label="White paper"
    />
  </div>
  <div class="w-full mx-auto">
    <Download
      class="mx-auto lg:m-0"
      toType="cde-whitepaper"
      eventType="Whitepaper"
    />
  </div>
</Section>
