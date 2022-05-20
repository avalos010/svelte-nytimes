<script>
  export let article;
  const image = article.media[0]["media-metadata"]
    ? article.media[0]["media-metadata"][1].url
    : null;
</script>

<div class="border-neutral-900">
  <img src={image} />
  <h2 class="text-slate-800">{article.title}</h2>
</div>
