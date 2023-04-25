# Installation

To install Chakra UI in your Nuxt 2 application, you need to install the `@nuxtjs/emotion` package to enable your component styles to be generated and injected in the server build.

To use Chakra UI in your Nuxt 2 project, run one of the following commands in your terminal:

With NPM :

```bash
npm install @chakra-ui/nuxt @nuxtjs/emotion
```

With YARN :

```bash
yarn add @chakra-ui/nuxt @nuxtjs/emotion
```

## Register the Chakra Module

After installation, we then go ahead and register the Chakra UI module in the `modules` key of our `nuxt.config.js` file.

Chakra module options are the same as the Vue CLI plugin options. You can learn more about the Chakra plugin options [here](https://vue.chakra-ui.com/plugin-options)

```js
export default {
  modules: [
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion'
  ],
  /**
   * Add extend the plugin options under the `chakra` key.
   **/
  chakra: {
    extendTheme: {
      colors: {
        brand: { /* ... */ }
      }
    }
  }
}
```

## Finally, setup Chakra's Theme Provider

After registering our Chakra module, we then go ahead and wrap our layouts in the `layouts` directory inside the `CThemeProvider` component so that all our Chakra UI components can access the theme object.

Great! Now you can start consuming Chakra components as shown below :

```js
<template>
  <CThemeProvider>
    <CReset />
    <Nuxt />
    <CButton as="nuxt-link" to="/">
      ⚡️ Oh, my Nuxt!
    </CButton>
  </CThemeProvider>
</template>

<script>
import { CThemeProvider, CReset, CButton } from '@chakra-ui/vue'

export default {
  name: 'DefaultLayout',
  components: {
    CThemeProvider,
    CReset,
    CButton
  }
}
</script>
```

:::tip
:sparkles: Well done! You have successfully installed and configured Chakra UI into your Nuxt 2 application.
:::
