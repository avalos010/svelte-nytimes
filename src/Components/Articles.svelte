<script>
  import Article from "./Article.svelte";
  export let articles, isSearch;
</script>

<div class="flex flex-col flex-wrap justify-center items-center">
  <!-- {console.log(articles)} -->
  {#each articles as article}
    <Article {article} {isSearch} />
  {/each}
</div>
