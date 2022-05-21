<script>
  import { Router, Route, Link } from "svelte-navigator";
</script>

<Router>
  <nav class="flex sm:justify-start space-x-4 p-3 bg-slate-400">
    <Link
      to="/"
      class="rounded-lg px-3 py-2 text-gray-700 font-medium hover:hover:text-slate-300"
      >Most Popular</Link
    >
    <Link
      to="/search"
      class="rounded-lg px-3 py-2 text-gray-700 font-medium hover:hover:text-slate-300"
      >Search</Link
    >
  </nav>
</Router>
