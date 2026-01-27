<script>
  export let data;
</script>

<header class="site-header">
  <nav class="nav">
    <a href="/" class="logo">Charlotte’s Web</a>

    <div class="links">
      <a href="/about">About</a>
      <a href="/work">Work</a>
      <a href="/contact">Contact</a>
    </div>
  </nav>
</header>

<main class="content">
  <slot />
</main>

<footer class="footer">
  <p>© {new Date().getFullYear()} charlottesweb.nexus</p>
</footer>

<style>
  .site-header {
    border-bottom: 1px solid #eee;
    padding: 1rem 2rem;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-weight: 600;
    text-decoration: none;
    color: inherit;
  }

  .links a {
    margin-left: 1.5rem;
    text-decoration: none;
    color: #555;
  }

  .links a:hover {
    color: #000;
  }

  .content {
    padding: 3rem 2rem;
    max-width: 960px;
    margin: 0 auto;
  }

  .footer {
    border-top: 1px solid #eee;
    padding: 2rem;
    text-align: center;
    color: #777;
  }
</style>
