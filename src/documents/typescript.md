## typescript for genres object/array

```
type Media = {
		genres:[Genre]
}

type MediaPlatform = "movie" | "tv";

type Genre = {
  id: number;
  name: string;
}

type Genres = {
  [Key in MediaPlatform]: Genre[];
}
const genre:Genres = {
  movie: [],
  tv: []
}
```

