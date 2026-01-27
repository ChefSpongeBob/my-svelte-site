<script>
  export let title;
  export let description;
</script>

<article class="card">
  <h2>{title}</h2>
  <p>{description}</p>
</article>

<style>
.card {
  background: var(--bg-panel);
  border-radius: 14px;
  padding: 1.5rem;
  border: 1px solid var(--border-subtle);
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.card:hover {
  background: var(--bg-panel-hover);
  transform: translateY(-4px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

h2 {
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-purple);
}

p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
}


</style>
