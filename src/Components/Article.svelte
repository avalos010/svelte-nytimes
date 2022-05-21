<script>
  export let article;
  const image = article.media[0]["media-metadata"]
    ? article.media[0]["media-metadata"][1].url
    : null;
</script>

<div class="w-4/5 flex p-2 m-4 shadow shadow-gray-700 hover:shadow-lg">
  <img src={image} alt={article.title} />
  <div class=" mt-1 ml-3">
    <h3 class="text-slate-800 text-lg">{article.title}</h3>
    <p class="text-sm text-slate-900">{article.abstract}</p>
    <p class="font-light text-xs">{article.published_date}</p>
    <button
      class="w-32 mt-4 p-1 rounded-md border-gray-400 border-2 hover:bg-gray-400"
    >
      <a
        class="text-xs text-neutral-500 mt-3"
        target="_blank"
        href={article.url}
        >Read
      </a>
    </button>
  </div>
</div>
