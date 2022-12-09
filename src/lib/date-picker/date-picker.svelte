<script>
  import dayjs from 'dayjs'

  export let format = 'YYYY-MM-DD'
  export let date = new Date()

  let internal

  const input = (x) => (internal = dayjs(x).format(format))
  const output = (x) => (date = dayjs(x, format).toDate())

  $: input(date)
  $: output(internal)
</script>

<style>
  input {
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
  }
</style>

<input type="date" bind:value={internal} class="py-2 px-4" />
