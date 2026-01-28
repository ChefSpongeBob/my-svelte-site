<script lang="ts">
  import { onMount } from "svelte";

  let canInstall = false;
  let deferredPrompt: BeforeInstallPromptEvent | null = null;

  onMount(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault(); // Prevent the auto-prompt
      deferredPrompt = e as BeforeInstallPromptEvent; // Explicitly cast to the correct event type
      canInstall = true; // Show the install button
    });
  });

  async function installApp() {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the native install dialog
      await deferredPrompt.userChoice; // Wait for user decision
      deferredPrompt = null; // Clear the event
      canInstall = false; // Hide the button after user choice
    }
  }
</script>

<h1>Install the App</h1>

<p>
  You can install Charlotte’s Web as an app on supported devices.
</p>

<p>
  Use the install option in your browser, or click below to install:
</p>

{#if canInstall}
  <button class="install-btn" on:click={installApp}>
    Install App
  </button>
{/if}

<style>
  .install-btn {
    margin-top: 1rem;
    padding: 0.6rem;
    border-radius: 8px;
    border: none;
    background: rgba(124, 92, 255, 0.2);
    color: var(--accent-purple);
    cursor: pointer;
  }
</style>
