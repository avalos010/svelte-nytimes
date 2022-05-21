<script>
  import Article from "./Article.svelte";
  export let articles;
</script>

<div class="flex flex-col flex-wrap justify-center items-center">
  {#each articles as article}
    <Article {article} />
  {/each}
</div>
