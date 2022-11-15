<script>
  import CardItem from "./lib/cardItem.svelte";
  import CardData from "./lib/menu";

  const buttons = ["All", "Korea", "Japan", "China"];

  let filter = "All";

  $: items =
    filter == "All"
      ? CardData
      : CardData.filter((item) => item.category == filter);
</script>

<main>
  <div class="container">
    <section class="menu">
      <!-- title -->
      <div class="title">
        <h2>Asian Kitchen's Menu</h2>
      </div>
      <!-- filter buttons-->
      <div class="btn-container">
        {#each buttons as button}
          <button
            class="btn btn-outline-dark btn-item"
            on:click={() => (filter = button)}
          >
            {button}
          </button>
        {/each}
      </div>
      <!-- menu items -->
      <div id="items" class="section-center row">
        {#each items as item}
          <CardItem {...item} />
        {/each}
      </div>
    </section>
  </div>
</main>
