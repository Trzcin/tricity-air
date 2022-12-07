<script lang="ts">
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
  } from "chart.js";
  import BarChart from "./components/BarChart.svelte";
  import LineChart from "./components/LineChart.svelte";
  import MapChart from "./components/MapChart.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import { barData } from "./data/bar_data";
  import { lineData } from "./data/line_data";

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
  );
  Chart.defaults.font.size = 16;
  Chart.defaults.font.family =
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

  let lineDataDisplay = lineData;
  let barDataDisplay = barData;
  let chartType: "line" | "bar" | "map" = "line";
</script>

<Sidebar bind:chartType bind:barDataDisplay bind:lineDataDisplay />
<main>
  {#if chartType == "line"}
    <LineChart {lineDataDisplay} />
  {:else if chartType == "bar"}
    <BarChart {barDataDisplay} />
  {:else}
    <MapChart />
  {/if}
</main>

<style>
  :global(#app) {
    display: grid;
    widows: 100%;
    height: 100%;
    grid-template-columns: 20rem auto;
  }

  @media screen and (max-width: 1200px) {
    :global(#app) {
      grid-template-columns: 1fr;
      grid-template-rows: 12rem auto;
    }

    :global(#sidebar) {
      flex-direction: row;
      box-shadow: 0 5px 5px #ccc;
    }
  }

  main {
    padding: 2rem 1.25rem;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
