<script lang="ts">
  import { onMount } from "svelte";
  import stations from "../data/stations.json";

  export let timeSpan: "day" | "week" | "year" = "year";
  export let displayDataType: "CO" | "NO2" | "PM10" = "CO";
  export let selectedStations: { [key: string]: boolean } = {};
  onMount(() => {
    for (const station of stations) {
      selectedStations[station] = true;
    }
    // force state update
    selectedStations = selectedStations;
  });
</script>

<div id="sidebar">
  <div>
    <label for="chart-select" class="title">Przedział Czasu</label>
    <select id="chart-select" bind:value={timeSpan}>
      <option value="day">Dzień</option>
      <option value="week">Tydzień</option>
      <option value="year">Rok</option>
    </select>
  </div>

  <div>
    <p>Wyświetlany Parametr</p>
    <label for="CO-toggle" class="check-container">
      CO
      <input
        type="radio"
        id="CO-toggle"
        name="displayed-data"
        value="CO"
        bind:group={displayDataType}
      />
      <span class="checkmark" />
    </label>
    <label for="NO2-toggle" class="check-container">
      NO2
      <input
        type="radio"
        id="NO2-toggle"
        name="displayed-data"
        value="NO2"
        bind:group={displayDataType}
      />
      <span class="checkmark" />
    </label>
    <label for="PM10-toggle" class="check-container">
      PM10
      <input
        type="radio"
        id="PM10-toggle"
        name="displayed-data"
        value="PM10"
        bind:group={displayDataType}
      />
      <span class="checkmark" />
    </label>
  </div>

  <div>
    <p>Uwzględniane Stacje</p>
    {#each stations as station}
      <label class="check-container">
        {station}
        <input type="checkbox" bind:checked={selectedStations[station]} />
        <span class="checkmark" />
      </label>
    {/each}
  </div>
</div>

<style>
  #sidebar {
    box-shadow: 5px 0 5px #ccc;
    padding: 1.25rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  label.title {
    font-weight: 600;
  }

  select {
    display: block;
    margin-top: 0.5rem;
    width: 50%;
    min-width: max-content;
    padding: 0.5rem 0.25rem;
  }

  p {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .check-container {
    display: block;
    position: relative;
    margin-left: 10px;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .check-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }

  .check-container:hover input ~ .checkmark {
    background-color: #ddd;
  }

  .check-container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .check-container input:checked ~ .checkmark:after {
    display: block;
  }

  .check-container .checkmark:after {
    left: 7px;
    top: 3px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
