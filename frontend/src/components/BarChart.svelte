<script lang="ts">
  import { Bar } from "svelte-chartjs";

  export let barDataDisplay;
</script>

<Bar
  data={barDataDisplay}
  options={{
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Jakość powietrza w poszczególnych stacjach pomiarowych",
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
