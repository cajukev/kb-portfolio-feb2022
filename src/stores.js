import { writable } from 'svelte-local-storage-store';
export const lang = writable('en', {
  lang:''
});
export const page = writable('',{
  page:''
});
export const date = writable('date', {
  date:''
});