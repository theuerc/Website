<script lang="ts">
  import { list } from "$lib/contents/contact";
  import CalendlyEmbed from "../get-demo/calendly-embed.svelte";
  import TickList from "../tick-list.svelte";
</script>

<style lang="postcss">
  header {
    @media (max-width: 810px) {
      @apply flex-col items-center gap-y-x-small;

      p {
        @apply mb-x-small;
      }
    }
  }

  div {
    &:first-child {
      flex: 0 0 40%;

      @media (max-width: 1000px) {
        flex: 0 0 50%;
      }

      @media (min-width: 811px) {
        @apply mt-huge;
      }
    }

    &:last-child {
      @apply w-full max-w-[600px];
      @media (min-width: 811px) {
        flex: 0 0 46%;
      }
    }
  }
</style>

<header class="flex justify-between mt-small">
  <div>
    <h1 class="mb-x-small">Get a demo</h1>
    <p class="text-large mb-small">
      And learn how your engineering organisation can scale with Gitpod.
    </p>
    <TickList {list} textClassNames="text-large" />
  </div>
  <div>
    <CalendlyEmbed />
  </div>
</header>
