<script lang="ts" context="module">
  export const key = Symbol();
</script>

<script lang="ts">
  import { getContext } from "svelte";
  import Octocat from "../svgs/octocat.svelte";

  const stars: string = getContext(key) ? getContext(key).toString() : null;
</script>

<style lang="postcss">
  a:hover,
  a:focus {
    :global(path) {
      @apply fill-important;
    }
  }
</style>

<a
  href="https://github.com/gitpod-io/gitpod/stargazers"
  target="_blank"
  class="flex items-center font-bold text-sm"
>
  <Octocat class="mr-1.5" />
  {#if stars}
    {Number(stars).toLocaleString("en-US")}
  {/if}
</a>
