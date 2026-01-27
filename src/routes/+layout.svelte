<script>
  import "../app.css";
  import { onMount } from "svelte";

  let sidebarOpen = true;

  onMount(() => {
    const saved = localStorage.getItem("sidebar-open");
    if (saved !== null) {
      sidebarOpen = saved === "true";
    }
  });

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
    localStorage.setItem("sidebar-open", sidebarOpen);
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
    class:collapsed={!sidebarOpen}
  >
    <div class="sidebar-title">Charlotte’s Web</div>

    <nav class="sidebar-nav">
      <a href="/" class="active">Overview</a>
      <a href="/iot">IOT & Dev</a>
      <a href="/work">Work</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
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
    background: #0f1013;
    border-right: 1px solid var(--border-subtle);
    padding: 1.5rem 1rem;
    transition: width 0.25s ease;
    overflow: hidden;
  }

  .sidebar.collapsed {
    width: 72px;
  }

  .sidebar-title {
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    transition: opacity 0.15s ease;
    white-space: nowrap;
  }

  .sidebar.collapsed .sidebar-title {
    opacity: 0;
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
      transform 0.15s ease;
  }

  .sidebar-nav a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-primary);
    transform: translateX(2px);
  }

  .sidebar-nav a.active {
    background: rgba(124, 92, 255, 0.18);
    color: var(--accent-purple);
  }

  .sidebar.collapsed .sidebar-nav a {
    text-align: center;
    padding: 0.6rem 0;
  }

  /* --- Header --- */
  .site-header {
    padding: 0.75rem 1.5rem;
    background: #0f1013;
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
