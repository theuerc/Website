<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;
  export let subMenu: boolean = false;
  let className: string = "";
  export { className as class };

  $: normalizedPath = /self-hosted\/\d\.\d\.\d/.test($page.url.pathname)
    ? $page.url.pathname.replace(/\d\.\d\.\d/, "latest")
    : $page.url.pathname;
  $: active = href === normalizedPath || href === `${normalizedPath}/`;
</script>

<style lang="postcss">
  .active {
    @apply border-current font-semibold text-secondary;
  }

  .subMenu {
    @apply pl-8;
  }
</style>

<a
  class:subMenu
  class:active
  class="block border-l pl-4 -ml-px border-transparent dark:hover:border-divider-light hover:border-light-black {className}"
  {href}
  sveltekit:prefetch
  {...$$props}><slot /></a
>
