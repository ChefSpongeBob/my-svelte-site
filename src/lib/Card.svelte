<script>
  import { fly } from "svelte/transition";

  export let title;
  export let description;
</script>

<article
  class="card"
  transition:fly={{ y: 12, duration: 250 }}
>
  <h2>{title}</h2>
  <p>{description}</p>
</article>

<style>
  .card {
    position: relative;
    background: linear-gradient(
      180deg,
      rgba(26, 27, 31, 0.95),
      rgba(18, 18, 20, 0.95)
    );
    border-radius: 16px;
    padding: 1.6rem;
    border: 1px solid var(--border-subtle);

    transition:
      transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.25s ease,
      border-color 0.25s ease;

    will-change: transform;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      120% 120% at 0% 0%,
      rgba(124, 92, 255, 0.18),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
  }

  .card:hover {
    transform: translateY(-6px);
    border-color: rgba(124, 92, 255, 0.35);
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.55),
      0 0 24px rgba(124, 92, 255, 0.25);
  }

  .card:hover::before {
    opacity: 1;
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-purple);
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.55;
    font-size: 0.95rem;
  }
</style>
