<script>
  import "../app.css";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let sidebarCollapsed = false;
  onMount(async () => {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/sw.js');
        console.log('✅ Service worker registered');
      } catch (err) {
        console.error('❌ Service worker registration failed', err);
      }
    }
  });

  onMount(() => {
    const saved = localStorage.getItem("sidebar-open");
    sidebarCollapsed = saved === "false";
  });

  let canInstall = false;
  let deferredPrompt;

  onMount(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      canInstall = true;
    });
  });

  async function installApp() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    canInstall = false;
  }

  function toggleSidebar() {
    sidebarCollapsed = !sidebarCollapsed;
    localStorage.setItem("sidebar-open", String(!sidebarCollapsed));
  }
</script>

<header class="site-header">
  <div class="header-inner">
    

    <div class="header-title">
      <div>Cweb</div>
      <div class="header-subtitle">Driving Things to do Stuff.</div>
    </div>
  </div>
</header>


<div class="app-shell">
  <aside class="sidebar {sidebarCollapsed ? 'collapsed' : ''}">
  <button class="sidebar-toggle" on:click={toggleSidebar} aria-label="Toggle sidebar">
  ☰
</button>

    {#if !sidebarCollapsed}
  <div class="sidebar-title">
    Charlotte’s Web
  </div>
{/if}


<nav class="sidebar-nav">
  <a
    href="/"
    class:active={$page.url.pathname === "/"}
    on:click={() => sidebarCollapsed = true}
  >
    <i class="fas fa-spider sidebar-logo"></i>
    {#if !sidebarCollapsed}
      <span> Home</span>
    {/if}
  </a>

  <a
    href="/download"
    class:active={$page.url.pathname.startsWith("/download")}
    on:click={() => sidebarCollapsed = true}
  >
    {#if sidebarCollapsed}
      <i class="fa-solid fa-download"></i>
    {:else}
      App
    {/if}
  </a>

  <a
    href="/iot"
    class:active={$page.url.pathname.startsWith("/iot")}
    on:click={() => sidebarCollapsed = true}
  >
    {#if sidebarCollapsed}
      <i class="fas fa-plug"></i>
    {:else}
      IOT Sys Arch
    {/if}
  </a>

  <a
    href="/work"
    class:active={$page.url.pathname.startsWith("/work")}
    on:click={() => sidebarCollapsed = true}
  >
    {#if sidebarCollapsed}
      <i class="fas fa-briefcase"></i>
    {:else}
      Projects
    {/if}
  </a>

  <a
    href="/about"
    class:active={$page.url.pathname.startsWith("/about")}
    on:click={() => sidebarCollapsed = true}
  >
    {#if sidebarCollapsed}
      <i class="fas fa-circle-info"></i>
    {:else}
      About
    {/if}
  </a>

  <a
    href="/contact"
    class:active={$page.url.pathname.startsWith("/contact")}
    on:click={() => sidebarCollapsed = true}
  >
    {#if sidebarCollapsed}
      <i class="fas fa-envelope"></i>
    {:else}
      Contact
    {/if}
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
  .app-shell {
    display: flex;
    min-height: calc(100vh - 80px);
  }

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
  transition: width 0.25s ease;
  box-shadow:
    inset -1px 0 0 rgba(255, 255, 255, 0.03),
    0 0 40px rgba(124, 92, 255, 0.08);
  z-index: 20;
}


  .sidebar.collapsed {
    width: 72px;
    padding: 1.5rem 0.5rem;
  }

  .sidebar-title {
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
  }

  .sidebar-logo {
    font-size: 1.8rem;
  }

  .sidebar-nav a,
  .sidebar-nav .install-tab {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.65rem;
    margin-bottom: 0.3rem;
    border-radius: 8px;
    text-decoration: none;
    color: var(--text-secondary);
    font-size: 0.95rem;
    transition: background 0.2s ease, color 0.2s ease;
    background: none;
    border: none;
    cursor: pointer;
  }

  .sidebar-nav a:hover,
  .sidebar-nav .install-tab:hover {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-primary);
  }

  .sidebar-nav a.active {
    background: linear-gradient(
      90deg,
      rgba(124, 92, 255, 0.22),
      rgba(124, 92, 255, 0.05)
    );
    color: var(--accent-purple);
  }

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
  position: relative;
  z-index: 30;
  width: auto;
  align-self: center;
    margin-top: -0.5rem; /* move up slightly */
  margin-right: 0.5rem; /* nudge toward edge */
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

  @media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 20;
    transform: translateX(-100%);
    transition: transform 0.25s ease;
  }

  .sidebar:not(.collapsed) {
    transform: translateX(0);
  }

  .content {
    padding: 2rem 1.25rem;
  }
}
</style>
