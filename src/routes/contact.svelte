<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/timeslots')
			.then((response) => response.json())
			.then((json) => {
				return json;
			});

		const data = await res;

		return {
			props: { timeslots: data }
		};
	};
</script>

<script>
  import Contact from '/src/components/pages/contact.svelte';
  import {lang, page} from '../stores'
  export let timeslots = {}
  $lang = "en"
  $page = "contact"
  
</script>
  
<Contact lang={"en"} timeslots={timeslots}></Contact>