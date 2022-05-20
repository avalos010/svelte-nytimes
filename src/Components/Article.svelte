<script>
  export let article;
  const image = article.media[0]["media-metadata"]
    ? article.media[0]["media-metadata"][1].url
    : null;
</script>

<div
  class="w-80 relative md:basis-1/4 flex p-2 m-4 shadow shadow-gray-700 hover:shadow-lg"
>
  <img src={image} alt={article.title} />
  <div class=" mt-1 ml-3">
    <h2 class="text-slate-800">{article.title}</h2>
    <button
      class="w-32 p-1 rounded-md border-gray-400 border-2 absolute bottom-1 hover:bg-gray-400"
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
