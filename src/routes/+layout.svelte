<script>
  import "../app.css";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { page } from "$app/stores";

  const sidebar = spring(1, {
    stiffness: 0.15,
    damping: 0.4
  });

  onMount(() => {
    const saved = localStorage.getItem("sidebar-open");
    sidebar.set(saved === "true" ? 1 : 0);
  });

  function toggleSidebar() {
    sidebar.update(v => {
      const next = v > 0.5 ? 0 : 1;
      localStorage.setItem("sidebar-open", String(next === 1));
      return next;
    });
  }
</script>

<header class="site-header">
  <div class="header-inner">
    <button
      class="sidebar-toggle"
      on:click={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      ☰
    </button>

    <span class="header-title">Charlotte’s Web</span>
  </div>
</header>

<div class="app-shell">
  <aside
    class="sidebar"
    style="transform: translateX(calc(-168px * (1 - {$sidebar})));"
  >
    <div class="sidebar-title">Charlotte’s Web</div>

    <nav class="sidebar-nav">
      <a href="/" class:active={$page.url.pathname === "/"}>
        Overview
      </a>

      <a href="/iot" class:active={$page.url.pathname.startsWith("/iot")}>
        IOT & Dev
      </a>

      <a href="/work" class:active={$page.url.pathname.startsWith("/work")}>
        Work
      </a>

      <a href="/about" class:active={$page.url.pathname.startsWith("/about")}>
        About
      </a>

      <a href="/contact" class:active={$page.url.pathname.startsWith("/contact")}>
        Contact
      </a>
    </nav>
  </aside>

  <main class="content">
    <slot />
  </main>
</div>

<footer class="footer">
  <p>© {new Date().getFullYear()} charlottesweb.nexus</p>
</footer>

<style>
  /* --- Shell --- */
  .app-shell {
    display: flex;
    min-height: calc(100vh - 80px);
  }

  /* --- Sidebar --- */
  .sidebar {
    width: 240px;
    background: linear-gradient(
      180deg,
      rgba(26, 27, 31, 0.9),
      rgba(18, 18, 20, 0.95)
    );
    backdrop-filter: blur(10px);
    border-right: 1px solid var(--border-subtle);
    padding: 1.5rem 1rem;
    overflow: hidden;
    box-shadow:
      inset -1px 0 0 rgba(255, 255, 255, 0.03),
      0 0 40px rgba(124, 92, 255, 0.08);
  }

  .sidebar-title {
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    white-space: nowrap;
  }

  .sidebar-nav a {
    display: block;
    padding: 0.65rem 0.75rem;
    margin-bottom: 0.3rem;
    border-radius: 8px;
    text-decoration: none;
    color: var(--text-secondary);
    font-size: 0.95rem;
    transition:
      background 0.2s ease,
      color 0.2s ease,
      transform 0.15s ease,
      box-shadow 0.2s ease;
  }

  .sidebar-nav a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-primary);
    transform: translateX(2px);
  }

  .sidebar-nav a.active {
    background: linear-gradient(
      90deg,
      rgba(124, 92, 255, 0.22),
      rgba(124, 92, 255, 0.05)
    );
    color: var(--accent-purple);
    box-shadow:
      inset 2px 0 0 var(--accent-purple),
      0 0 12px rgba(124, 92, 255, 0.35);
  }

  /* --- Header --- */
  .site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 0.75rem 1.5rem;
    backdrop-filter: blur(8px);
    background: rgba(15, 16, 19, 0.75);
    border-bottom: 1px solid var(--border-subtle);
  }

  .header-inner {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 48px;
  }

  .header-title {
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .sidebar-toggle {
    background: none;
    border: none;
    color: var(--text-primary);
    font-size: 1.25rem;
    cursor: pointer;
    transition: transform 0.15s ease, opacity 0.15s ease;
  }

  .sidebar-toggle:hover {
    transform: scale(1.1);
    opacity: 0.85;
  }

  /* --- Content --- */
  .content {
    flex: 1;
    padding: 3rem;
    max-width: 1100px;
  }

  /* --- Footer --- */
  .footer {
    border-top: 1px solid var(--border-subtle);
    padding: 2rem;
    text-align: center;
    color: var(--text-secondary);
  }
</style>
