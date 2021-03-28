import { writable, readable, Writable } from 'svelte/store'

export const current_page:Writable<number> = writable(1)

export const media_type:Writable<string> = writable('movie')

export const genres_list = writable({})

export const selected:Writable<string>= writable('')

export const ApiKey = readable(process.env.SAPPER_APP_API_KEY, () => {})