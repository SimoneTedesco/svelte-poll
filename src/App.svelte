<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import PollList from './components/PollList.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Tabs from './shared/Tabs.svelte';

  // tabs
  let items = ["current polls", "add new poll"];
  let activeItem = "current polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  }

  let polls = [{
    id: 1,
    question: "What is your favorite color?",
    answerA: "Blue",
    answerB: "Red",
    votesA: 0,
    votesB: 10,
  }]
  const handleAdd = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    activeItem = "current polls";
    console.log('polls :>> ', polls);
  }
  
  const handleVote = (e) => {
    const { id, option } = e.detail;
    const vote = option === "a" ? "votesA" : "votesB";
    polls = polls.map(p => p.id === id ? { ...p, [vote]: p[vote] + 1 } : p);
  }

</script>

<Header />
<main>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione obcaecati placeat et deleniti provident eveniet nisi. Quia quidem velit inventore magni, quisquam quis aspernatur. Doloremque beatae atque vero sint repellendus.</p>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === "current polls"}
    <PollList {polls} on:vote={handleVote} />
  {:else if activeItem === "add new poll"}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main{
    max-width: 960px;
    margin: 40px auto;
  }
</style>