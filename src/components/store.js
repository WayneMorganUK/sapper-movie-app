import { writable, readable } from 'svelte/store'

export const current_page = writable(1)

export const media_type = writable('movie')

export const genres_list = writable({})