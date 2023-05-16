<script lang="ts" context="module">
  export const prerender = true;

  export const load: Load = async () => {
    const posts = await getPosts();
    return { props: { allPosts: posts } };
  };
</script>

<script lang="ts">
  import Body from "$lib/components/screencasts/body.svelte";
  import GetStartedSmall from "$lib/components/screencasts/get-started-small.svelte";
  import { demoScreencast } from "$lib/contents/screencasts";
  import type { BlogPost } from "$lib/types/blog-post";
  import MoreArticles from "$lib/components/more-articles.svelte";
  import type { Load } from "@sveltejs/kit";
  import { getPosts } from "$lib/utils/content";
  export let allPosts: any;

  const posts = allPosts.filter((p: BlogPost) =>
    [
      "i-said-goodbye-to-local-development-and-so-can-you",
      "cloud-based-development-for-everyone",
    ].some((slug) => p.slug === slug)
  );
</script>

<Body
  title="Gitpod's developer platform"
  description="Watch a short demo of Gitpod CDEs to learn how to developer faster <br/> and more securely."
  screencast={demoScreencast}
  hideDescription={true}
>
  <div slot="custom">
    <h2 class="h5 mt-micro mb-2">Gitpod Demo</h2>
    <p class="max-w-xl">
      See how Gitpod launches a ready-to-code project built on five containers
      using a Node app, .NET app, a Python app as well as Redis and Postgres
      databases with a simple click.
    </p>

    <div class="flex flex-row my-xx-small items-center space-x-2">
      <p class="text-important font-bold text-md md:text-xl">
        Try it yourself:
      </p>
      <a
        href="https://gitpod.io/#https://github.com/gitpod-io/voting-app"
        target="_blank"
        data-analytics={`{"context":"screencast_page"}`}
        ><img
          src="/svg/open-in-gitpod.svg"
          alt="Open in Gitpod"
          class="h-3/4 md:h-full w-3/4 md:w-full"
        /></a
      >
    </div>
  </div>
</Body>

<div class="mt-x-large md:mt-xxx-large">
  <GetStartedSmall />
  <p class="mt-6 md:mb-24 max-w-full mx-auto text-center text-base">
    Do you still have questions? Please <a href="/contact/sales"
      >Contact sales</a
    >.
  </p>
</div>

<MoreArticles
  title="Helpful resources"
  posts={[
    posts[1],
    posts[0],
    {
      title: "Gitpodifying — The Ultimate Guide",
      excerpt:
        "I recently stumbled upon a new project on GitHub that peaked my interest. It proposed a new type of database that I was dying to try out.",
      image: "/images/guides/gitpodify/teaser.jpg",
      type: "guides",
      href: "/guides/gitpodify",
      isNotAnActualPost: true,
    },
  ]}
/>
