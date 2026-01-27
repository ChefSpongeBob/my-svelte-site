<script>
  import "../app.css";
  import { onMount } from "svelte";

  let theme = "light";

  onMount(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    theme = saved ?? (prefersDark ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  });

  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }
</script>


<header class="site-header">
  <nav class="nav">
    <a href="/" class="logo">Charlotte’s Web</a>

    <div class="links">
      <a href="/about">About</a>
      <a href="/work">Work</a>
      <a href="/iot">IOT & Systems Engineering</a>
      <a href="/contact">Contact</a>
    </div>
    <button class="theme-toggle" on:click={toggleTheme}>
  {theme === "light" ? "🌙" : "☀️"}
</button>

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
  position: relative;
  padding: 1.5rem 2rem;
  background-image: url("/header-bg.jpg");
  background-size: cover;
  background-position: center;
  color: white;
}
.site-header::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.65);
  backdrop-filter: blur(2px);
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
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  transition: color 0.2s ease, transform 0.2s ease;
}

.links a:hover {
  color: white;
  transform: translateY(-1px);
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

  .theme-toggle {
  margin-left: 1.5rem;
  background: none;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  color: var(--text);
}

</style>
