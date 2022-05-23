<script>
  import { getSearchResults } from "../Api/index";
  import Articles from "./Articles.svelte";
  let searchResults, searchQuery;
  searchResults = [];
  async function handleSearch() {
    const res = await getSearchResults(searchQuery);
    searchResults = res;
  }
</script>

<div class="">
  <div class="mx-auto mt-3 flex justify-center">
    <input
      bind:value={searchQuery}
      type="text"
      placeholder="Search..."
      style="width: 300px"
      class="border-rounded border-2"
    />
    <button on:click={handleSearch} class="bg-gray-300 text-sm p-2">
      Search
    </button>
  </div>
  <Articles articles={searchResults} isSearch={true} />
</div>
