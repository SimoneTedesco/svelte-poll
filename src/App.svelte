<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Tabs from './shared/Tabs.svelte';

  // tabs
  let items = ["current polls", "add new poll"];
  let activeItem = "current polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  }
</script>

<Header />
<main>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione obcaecati placeat et deleniti provident eveniet nisi. Quia quidem velit inventore magni, quisquam quis aspernatur. Doloremque beatae atque vero sint repellendus.</p>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
</main>
<Footer />

<style>
  main{
    max-width: 960px;
    margin: 40px auto;
  }
</style>