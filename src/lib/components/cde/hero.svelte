<script lang="ts">
  import Section from "$lib/components/section.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
</script>

<style>
  /* Apply below css if width screen size is greater than 960px */
  @media (min-width: 929px) {
    strong {
      position: relative;
    }
    strong::before {
      /* Highlight color */
      background-color: #ffe4bc;
      content: "";
      position: absolute;
      width: calc(100% + 2px);
      height: 50%;
      bottom: 0;
      z-index: -1;
    }
    @media screen and (prefers-color-scheme: dark) {
      strong::before {
        height: 100%;
        width: calc(100%);
      }
    }
  }
</style>

<Section>
  <div class="max-w-4xl mx-auto">
    <div
      class="text-important text-3xl md:text-5xl !leading-[3rem] md:!leading-[4rem]"
    >
      <strong class="md:dark:text-black md:text-important"
        >Cloud development environments</strong
      ><br />
      are
      <strong class="md:dark:text-black md:text-important"
        >on-demand and pre-configured</strong
      >
      with all tools, libraries and dependencies required to be
      <strong class="md:dark:text-black md:text-important">ready-to-code</strong
      >.
    </div>

    <LinkButton
      href="/contact/get-demo"
      variant="primary"
      size="large"
      class="mt-5 md:mt-8 text-center"
      >Get a demo
    </LinkButton>
  </div>
</Section>
