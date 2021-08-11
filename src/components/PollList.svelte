<script>
  import { onDestroy, onMount } from 'svelte';
  import PollDetails from './PollDetails.svelte';
  import PollStore from '../stores/PollStore.js';
  export let polls = [];

  // il subscribe ritorna una funzione per l'unsubscribe
  const unsub = PollStore.subscribe(data => {
    polls = data;
  });

  onMount = () => {
    // piuttosto chiaro lifecycles
  }

  onDestroy = () => {
    unsub();
  }
</script>

<div class="poll-list">
{#each polls as poll (poll.id)}
    <div>
      <!-- se nell'on non si passano valori allora l'evento verrà propagato al componente padre -->
      <PollDetails {poll} on:vote/>
    </div>
{/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>