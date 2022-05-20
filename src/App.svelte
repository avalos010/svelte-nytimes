<script>
  import { onMount } from "svelte";
  import { getPopularArticles } from "./Api/index";
  import Articles from "./Components/Articles.svelte";

  export let articles = [];
  onMount(async () => {
    const results = await getPopularArticles();
    articles = await results.results;
  });
</script>

<main>
  <Articles {articles} />
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
