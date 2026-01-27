<script>
  import Card from "$lib/Card.svelte";
</script>

<h1>Work</h1>

<div class="grid">
  <Card
    title="Charlotte’s Web"
    description="A modern SvelteKit site deployed globally on Cloudflare Pages."
  />

  <Card
    title="Edge Experiments"
    description="Testing how far edge-first architectures can go."
  />
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
</style>
