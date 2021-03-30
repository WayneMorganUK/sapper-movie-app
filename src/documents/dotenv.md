## env variable in store.ts requires two entries => add empty array

```
export const ApiKey = readable(process.env.SAPPER_APP_API_KEY, () => {})
```

## create .env file in root directory and declare values

```
SAPPER_APP_API_KEY = 61e... etc
```

## run following in bash

```
npm install sapper-environment --save
```

## update rollup.config.js

```
const sapperEnv = require('sapper-environment'); //----add this ------//

client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
        replace({
            ...sapperEnv(), <----add this ------>
            'process.browser': true,
            'process.env.NODE_ENV': JSON.stringify(mode),
        }),
```

## in \_layout add

```
const ApiKey: string = process.env.SAPPER_APP_API_KEY
```
