# Installation

To use Chakra UI in your Nextjs application, run one of the following commands in your terminal:

With NPM :

```bash
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```

With YARN : 

```bash
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```

## Provider setup

After installing Chakra UI, you need to set up the `ChakraProvider` at the root of your Nextjs application.

In your `_app.js` or `_app.tsx` file, wrap the Component with the `ChakraProvider` component as shown below:

```js
import { ChakraProvider } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
```

:::tip
:sparkles: Well done! You have successfully installed and configured Chakra UI into your Nextjs application.
:::