<script>
  import Card from "../shared/Card.svelte";
  import { createEventDispatcher } from "svelte";
  export let poll;

  const dispatch = createEventDispatcher();

  // reactive values
  $: totalVotes = poll.votesA + poll.votesB;

  // handling votes
  const handleVotes = (option, id) => {
    dispatch("vote", {option, id});
  }
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div class="answer" on:click={() => handleVotes("a", poll.id)}>
      <div class="percent percent-a"></div>
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div class="answer" on:click={() => handleVotes("b", poll.id)}>
      <div class="percent percent-b"></div>
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
</Card>

<style>

</style>