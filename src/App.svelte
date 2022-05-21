<script>
  import { onMount } from "svelte";
  import { getPopularArticles } from "./Api/index";
  import Articles from "./Components/Articles.svelte";
  import Navigation from "./Components/Navigation.svelte";
  import { Router, Route, Link } from "svelte-navigator";

  export let articles = [];
  onMount(async () => {
    const results = await getPopularArticles();
    articles = await results.results;
  });
</script>

<Router>
  <!-- <main> -->
  <Navigation />
  <Route path="/">
    <h2 class="text-center text-slate-700 text-lg">Most Popular Articles</h2>
    <Articles {articles} />
  </Route>
  <Route path="search">
    <p>Search articles</p>
  </Route>
  <Route>
    <h3>Default</h3>
    <p>No Route could be matched.</p>
    <Link to="home">Home</Link>
    <Link to="search">Search</Link>
  </Route>
  <!-- </main> -->
</Router>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
