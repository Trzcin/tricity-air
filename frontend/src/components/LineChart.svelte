<script lang="ts">
  import { Line } from "svelte-chartjs";

  export let lineDataDisplay;
</script>

<Line
  data={lineDataDisplay}
  options={{
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Jakość powietrza w Trójmieście w roku 2021",
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (v) => {
            return v + " mg/m^3";
          },
        },
      },
    },
  }}
/>
