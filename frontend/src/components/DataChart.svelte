<script lang="ts">
  import { Line } from "svelte-chartjs";

  import COYearData from "../data/CO_data_year.json";
  import COWeekData from "../data/CO_data_week.json";
  import CODayData from "../data/CO_data_day.json";
  const COData = [COYearData, COWeekData, CODayData];

  import NO2YearData from "../data/NO2_data_year.json";
  import NO2WeekData from "../data/NO2_data_week.json";
  import NO2DayData from "../data/NO2_data_day.json";
  const NO2Data = [NO2YearData, NO2WeekData, NO2DayData];

  import PM10YearData from "../data/PM10_data_year.json";
  import PM10WeekData from "../data/PM10_data_week.json";
  import PM10DayData from "../data/PM10_data_day.json";
  const PM10Data = [PM10YearData, PM10WeekData, PM10DayData];

  export let timeSpan: "day" | "week" | "year";
  export let displayDataType: "CO" | "NO2" | "PM10";
  export let selectedStations: { [key: string]: boolean };

  $: currentDataType =
    displayDataType === "CO"
      ? COData
      : displayDataType === "NO2"
      ? NO2Data
      : PM10Data;
  $: currentData =
    timeSpan === "year"
      ? currentDataType[0]
      : timeSpan === "week"
      ? currentDataType[1]
      : currentDataType[2];

  $: currentFilteredData = {
    ...currentData,
    datasets: currentData.datasets.filter(
      (ds) =>
        selectedStations[ds.id] == undefined || selectedStations[ds.id] == true
    ),
  };
  $: timeFrameWord =
    timeSpan === "day"
      ? "w ciągu dnia"
      : timeSpan === "week"
      ? "w trakcie tygodnia"
      : "w ciągu roku";
  $: plotTitle = `Ilość ${displayDataType} w Trójmieście ${timeFrameWord} (ug/m^3) (2021r.)`;
</script>

<Line
  data={currentFilteredData}
  options={{
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: plotTitle,
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (v) => {
            return v + " ug/m^3";
          },
        },
        min: 0,
      },
      x: {
        min: 0,
      },
    },
  }}
/>
