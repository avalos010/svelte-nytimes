<script>
  import Article from "./Article.svelte";
  export let articles;
</script>

<div class="flex flex-row flex-wrap justify-center">
  {#each articles as article}
    <Article {article} />
  {/each}
</div>
