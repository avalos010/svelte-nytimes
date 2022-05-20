<script>
  import { onMount } from "svelte";
  import { getPopularArticles } from "./Api/index";

  let articles = [];
  onMount(async () => {
    const results = await getPopularArticles();
    articles = await results.results;
  });
</script>

<main>
  {#each articles as article}
    <p class="text-3xl font-bold underline">{article.url}</p>
  {:else}
    <p>wtf!</p>
  {/each}
</main>

<style global>
</style>
