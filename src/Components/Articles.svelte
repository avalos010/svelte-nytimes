<script>
  import Article from "./Article.svelte";

  export let articles;
</script>

<div class="flex flex-col flex-wrap justify-center items-center">
  <!-- {console.log(articles)} -->
  {#each articles as article}
    <Article {article} />
    <p>{article.uri}</p>
  {/each}
</div>
