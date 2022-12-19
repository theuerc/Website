<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const res = await fetch("/api/customers");
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const customers = await res.clone().json();
    return { stuff: { customers } };
  };
</script>

<slot />
