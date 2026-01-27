<script>
  import { fade, slide } from "svelte/transition";
  import Card from "$lib/Card.svelte";
</script>

<div in:fade={{ duration: 300 }}>
  <div in:slide={{ y: 12, duration: 300 }}>
    <h1>Charlotte’s Web</h1>

    <p>
      Dev building on modern Svelte bringing IoT interfaces to life
      with edge-first architectures and D1-powered backends.
    </p>

    <div class="grid">
      <Card
        title="Current Focus"
        description="Building a modern SvelteKit site deployed globally on Cloudflare Pages."
      />

      <Card
        title="Experiments"
        description="Edge runtimes, clean UI systems, and intentional performance decisions."
      />

      <Card
        title="Notes"
        description="Thoughts and write-ups as things start to take shape."
      />
    </div>
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
</style>
