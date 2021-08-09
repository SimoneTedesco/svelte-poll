import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "What is your favorite color?",
    answerA: "Blue",
    answerB: "Red",
    votesA: 0,
    votesB: 10,
  }
]);

export default PollStore;