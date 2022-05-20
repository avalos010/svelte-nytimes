<script>
  import Article from "./Article.svelte";
  export let articles;
</script>

<main>
  {#each articles as article}
    <Article {article} />
  {/each}
</main>
