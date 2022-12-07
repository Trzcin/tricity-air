<script lang="ts">
  import { barData } from "../data/bar_data";
  import { lineData } from "../data/line_data";

  let displayCO = true;
  let displayNO2 = true;
  let displayPM10 = true;
  $: excludeDisplay = [
    !displayCO ? "CO" : "",
    !displayNO2 ? "NO2" : "",
    !displayPM10 ? "PM10" : "",
  ];

  export let chartType: "line" | "bar" | "map" = "line";
  export let lineDataDisplay;
  export let barDataDisplay;

  $: lineDataDisplay = {
    ...lineData,
    datasets: lineData.datasets.filter((ds) => !excludeDisplay.includes(ds.id)),
  };
  $: barDataDisplay = {
    ...barData,
    datasets: barData.datasets.filter((ds) => !excludeDisplay.includes(ds.id)),
  };
</script>

<div id="sidebar">
  <div>
    <label for="chart-select" class="title">Rodzaj wykresu</label>
    <select id="chart-select" bind:value={chartType}>
      <option value="line">Line chart</option>
      <option value="bar">Bar chart</option>
      <option value="map">Map chart</option>
    </select>
  </div>

  <div>
    <p>Wyświetlane dane</p>
    <label for="CO-toggle" class="check-container">
      CO
      <input type="checkbox" id="CO-toggle" bind:checked={displayCO} />
      <span class="checkmark" />
    </label>
    <label for="NO2-toggle" class="check-container">
      NO2
      <input type="checkbox" id="NO2-toggle" bind:checked={displayNO2} />
      <span class="checkmark" />
    </label>
    <label for="PM10-toggle" class="check-container">
      PM10
      <input type="checkbox" id="PM10-toggle" bind:checked={displayPM10} />
      <span class="checkmark" />
    </label>
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
