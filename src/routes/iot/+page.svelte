<script>
 // Import the Card component
 import Card from '$lib/Card.svelte';
 </script>


<h1>DEV Concepts & IOT D1/KV Database structures</h1>

<p>
  A space for collecting data, exploring signals, and connecting physical
  systems to the web.
</p>

<section class="iot-cards">
  <a href="/work">
    <Card
      title="ESP8266 GateWay/Node Communication"
      description="Internal tools, data flows, and operational experiments."
    />
  </a>

  <a href="/download">
    <Card
      title="Downloadable Apps & Software"
      description="Schemas, exports, and build artifacts."
    />
  </a>

  <a href="/about">
    <Card
      title="3DPrinting, Project Dynamics"  
      description="Intent, structure, and ongoing directions."
    />
  </a>
</section>


<p>
  Environmental data, device telemetry, and edge processing experiments will
  live here.
</p>
<p>
  This section will evolve as experiments take shape.
</p>


<section class="iot-preview">
  <h2>Environment Overview</h2>

  <div class="preview-card">
    <div class="preview-info">
      <strong>Cooler 1 Temps</strong>
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

  <div class="preview-card">
    <div class="preview-info">
      <strong>Cooler 2 Temps</strong>
      <div class="muted">Temp: 21.2°C</div>
      <div class="muted">Humidity: 52%</div>
      <div class="status">Last update: 5 min ago</div>
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

  <div class="preview-card">
    <div class="preview-info">
      <strong>Walk In Cooler</strong>
      <div class="muted">Temp: 18.9°C</div>
      <div class="muted">Humidity: 61%</div>
      <div class="status">Last update: 12 min ago</div>
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

<style>
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
</style>
