<script>
  import { fade, slide } from "svelte/transition";
  import Card from "$lib/Card.svelte";
</script>

<div in:fade={{ duration: 300 }}>
  <div in:slide={{ y: 12, duration: 300 }}>
   <h1>Charlottes WebNexus</h1>
<p>
  Designing and building complete systems across full-stack development,
  IoT architecture, and physical production—from concept through deployment.
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

 <section class="iot-preview">
  <h2>Environment Overview</h2>

  <div class="preview-card">
    <div class="preview-info">
      <strong>Living Room</strong>
      <div class="muted">Temp: 22.6°C</div>
      <div class="muted">Humidity: 48%</div>
      <div class="status">Last update: 2 min ago</div>
    </div>

    <div class="preview-graph">
<svg
  viewBox="0 0 180 70"
  width="180"
  height="70"
  aria-hidden="true"
>
  <polyline
    points="0,45 20,42 40,48 60,40 80,38 100,44 120,36 140,39 160,34 180,37"
    fill="none"
    stroke="rgba(124, 92, 255, 0.9)"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
    </div>
  </div>
</section>

  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  /* IoT Preview styles */
  .iot-preview {
    margin-top: 3rem;
  }

  .preview-card {
  margin-top: 1rem;
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.preview-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

/* Fake graph for now */
.preview-graph {
  width: 180px;
  height: 70px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(124, 92, 255, 0.18),
    rgba(124, 92, 255, 0.02)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: var(--text-secondary);
}


  .muted {
    color: var(--text-secondary);
    font-size: 0.85rem;
  }

  .status {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }
  @media (hover: none) {
  .card {
    will-change: auto;
  }
}

</style>
