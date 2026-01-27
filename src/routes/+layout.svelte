<script>
  import "/src/app.css";

  let sidebarOpen = true;
</script>


<header class="site-header">
  <div class="header-inner">
<button
  class="sidebar-toggle"
  on:click={() => (sidebarOpen = !sidebarOpen)}
  aria-label="Toggle sidebar"
>
  ☰
</button>


    <span class="header-title">Charlotte’s Web</span>
  </div>
</header>
<div class="app-shell">
  <aside class="sidebar {sidebarOpen ? 'open' : 'collapsed'}">

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
  .app-shell {
  display: flex;
  min-height: calc(100vh - 80px);
}

.sidebar {
  width: 240px;
  background: #0f1013;
  border-right: 1px solid var(--border-subtle);
  transition: width 0.25s ease;
  overflow: hidden;
}

.sidebar.collapsed {
  width: 72px;
}
.sidebar.collapsed .sidebar-title {
  opacity: 0;
}

.sidebar.collapsed .sidebar-nav a {
  text-align: center;
  padding: 0.6rem 0;
}


.sidebar-title {
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.sidebar-nav a {
  display: block;
  padding: 0.6rem 0.75rem;
  margin-bottom: 0.25rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.95rem;
  transition: background 0.2s ease, color 0.2s ease;
}

.sidebar-nav a:hover {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-primary);
}

.sidebar-nav a.active {
  background: rgba(124, 92, 255, 0.15);
  color: var(--accent-purple);
}

.site-header {
  position: relative;
  padding: 1rem 1.5rem;
  background-image: url("/header-bg.jpg");
  background-size: cover;
  background-position: center;
}

.site-header::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(5, 5, 8, 0.75);
}

.header-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
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

  .nav {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-weight: 600;
    text-decoration: none;
    color: white;
  }

  .links a {
  color: var(--text-secondary);
}

.links a:hover {
  color: var(--accent-red);
}


.content {
  flex: 1;
  padding: 3rem;
  max-width: 1100px;
}


.footer {
  border-top: 1px solid var(--border-subtle);
  padding: 2rem;
  text-align: center;
  color: var(--text-secondary);
}

</style>
