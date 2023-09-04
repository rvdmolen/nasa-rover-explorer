<script>
  import DateInput from "$lib/date-picker/date-picker.svelte";
  import dayjs from "dayjs";
  import { selectedDateStore } from "../../../stores/selected-date.store.js";
  import { dateService } from "../../../services/date.service.js";

  let date = new Date();

  $: if (date) {
    const formattedDate = dateService.formatDate(date);
    selectedDateStore.setDate(formattedDate);
  }

  function previousDate() {
    const newDate = dayjs(date).subtract(1, 'day');
    date = dateService.formatDate(newDate);
  }

  function nextDate() {
    const newDate = dayjs(date).add(1, 'day');
    date = dateService.formatDate(newDate);
  }

</script>

<div class="inline-flex">
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" on:click={previousDate}>
    Prev
  </button>
  <DateInput bind:date></DateInput>
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" on:click={nextDate}>
    Next
  </button>
</div>
