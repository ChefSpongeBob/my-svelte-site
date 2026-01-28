<script>
  import { onMount } from "svelte";

  let deferredPrompt = null;
  let installable = false;

  onMount(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      installable = true;
    });
  });

  async function installApp() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      installable = false;
    } else {
      alert(
        "Use your browser’s install option:\n\n" +
        "• Chrome / Edge: address bar install icon\n" +
        "• iOS Safari: Share → Add to Home Screen"
      );
    }
  }
</script>

<h1>Download App</h1>

<p>
  Install Charlotte’s Web as a standalone app on your device.
</p>

<button class="install-btn" on:click={installApp}>
  Install App
</button>

{#if !installable}
  <p class="hint">
    If no prompt appears, use your browser’s install menu.
  </p>
{/if}

<style>
  .install-btn {
    margin-top: 1rem;
    padding: 0.75rem 1.25rem;
    border-radius: 8px;
    border: none;
    background: rgba(124, 92, 255, 0.25);
    color: var(--accent-purple);
    cursor: pointer;
  }

  .hint {
    margin-top: 0.75rem;
    opacity: 0.65;
    font-size: 0.9rem;
  }
</style>
