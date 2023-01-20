<script lang="ts">
  import QaTooltip from "$lib/components/qa-tooltip.svelte";
  import { onMount } from "svelte";
  import type { FeatureTocItem, FeatureTocItemType } from "../feature-table";
  export let type: FeatureTocItemType;
  export let definition: FeatureTocItem;

  let targetElement: HTMLDivElement;

  let displayLine = false;

  const handleMouseMove = (e: MouseEvent) => {
    //get left bounds of the element
    const left = targetElement.getBoundingClientRect().left;
    const top = targetElement.getBoundingClientRect().top;
    const bottom = targetElement.getBoundingClientRect().bottom;

    const right = left + 1400;

    const isWithinHorizontalBounds = e.clientX > left && e.clientX < right;
    const isWithinVerticalBounds = e.clientY > top && e.clientY < bottom;

    if (isWithinHorizontalBounds && isWithinVerticalBounds) {
      displayLine = true;
    } else {
      displayLine = false;
    }
  };

  onMount(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
</script>

<div bind:this={targetElement} class="flex relative items-center">
  {#if !(type == "text" && !definition.text)}
    {#if displayLine}
      <div
        class="absolute bg-grey dark:bg-light-black -left-4 h-full opacity-20 -z-10 r-0 rounded-l-2xl w-[1400px]"
      />
    {/if}
  {/if}
  {#if type === "tooltip"}
    <QaTooltip text={definition.text} tooltip={definition.tooltip} />
  {/if}
  {#if type === "text"}
    {definition.text}
  {/if}
  {#if type === "image"}
    {#if definition.image && definition.image.path}
      <img
        class="mr-2"
        src={definition.image.path}
        alt={definition.image.alt}
        width="24"
      />
    {:else}
      <svelte:component this={definition.image} width="24" class="mr-2" />
    {/if}
    {definition.text}
  {/if}
</div>
