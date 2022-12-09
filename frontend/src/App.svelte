<script lang="ts">
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
  } from "chart.js";
  import DataChart from "./components/DataChart.svelte";
  import Sidebar from "./components/Sidebar.svelte";

  Chart.register(
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
  );
  Chart.defaults.font.size = 16;
  Chart.defaults.font.family =
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

  let timeSpan: "day" | "week" | "year" = "year";
  let displayDataType: "CO" | "NO2" | "PM10" = "CO";
  let selectedStations: { [key: string]: boolean } = {};
</script>

<Sidebar bind:timeSpan bind:displayDataType bind:selectedStations />
<main>
  <DataChart {timeSpan} {displayDataType} {selectedStations} />
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
