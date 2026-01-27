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
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    background: var(--bg);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  }
  h2 {
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

</style>
