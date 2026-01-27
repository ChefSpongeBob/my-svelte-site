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
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid #eee;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

  h2 {
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

</style>
