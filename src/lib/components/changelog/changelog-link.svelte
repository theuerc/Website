<script lang="ts">
  export let href: string;
  let clazz = "";
  export { clazz as class };
</script>

<a
  {href}
  class="text-2xl !text-[#999795] block no-underline font-normal transition-all duration-200 hover:underline focus:underline hover:decoration-2 focus:decoration-2 {clazz}"
>
  <slot />
</a>
