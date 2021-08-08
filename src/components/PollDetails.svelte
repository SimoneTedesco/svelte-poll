<script>
  import Card from "../shared/Card.svelte";
  import { createEventDispatcher } from "svelte";
  export let poll;

  const dispatch = createEventDispatcher();

  // reactive values
  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor(poll.votesA / totalVotes * 100);
  $: percentB = Math.floor(poll.votesB / totalVotes * 100);

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
      <div class="percent percent-a" style="width: {percentA}%;"></div>
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div class="answer" on:click={() => handleVotes("b", poll.id)}>
      <div class="percent percent-b" style="width: {percentB}%;"></div>
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
</Card>

<style>
  .answer {
    position: relative;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    background-color: rgba(218, 91, 91, 0.164);
  }
  .percent-b {
    background-color: rgba(152, 218, 91, 0.164);
  }
</style>