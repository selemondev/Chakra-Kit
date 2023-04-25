# Installation 

In your Vite React project, install Chakra UI by running either of the following commands in your terminal:

With NPM :

```bash
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```

With YARN :

```bash
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```

## Provider Setup

After installing Chakra UI, you need to set up the `ChakraProvider` at the root of your application.

Inside your `main.jsx` or `main.tsx` file, wrap the `ChakraProvider` component around the `App` component as shown below :

```js
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
```

:::tip
:sparkles: Well done! You have successfully installed and configured Chakra UI into your Vite-React application.
:::

