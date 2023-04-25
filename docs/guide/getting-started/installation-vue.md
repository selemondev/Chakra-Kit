# Usage with Vue 3

Chakra UI Vue Next is a simple modular and accessible component library that gives you the building blocks to build Vue applications with speed.

:::tip
Chakra UI Vue Next V1 (Chidori) is currently in experimental alpha. You can check out the roadmap [here](https://www.notion.so/4517ba273ef3409d8e0e9ec3d121f6c1?v=ce00244a41b74b79b4d01ee4c3aa61ec)
:::

## Installation

To install Chakra UI in your Vue 3 application, run the following command in your terminal: 

With YARN : 

```bash
yarn add @chakra-ui/vue-next
```

## Usage

**1. Import the Chakra UI plugin in your `main.js` or `main.ts` file.**

In order to use Chakra UI in your Vue 3 application , you need to import `ChakraUIVuePlugin` and `Chakra` from `@chakra-ui/vue-next` and then configure it as shown below 

```js
import { createApp } from 'vue'
import App from './App.vue'
import ChakraUIVuePlugin, { chakra } from "@chakra-ui/vue-next"
import { domElements } from "@chakra-ui/vue-system"

const app = createApp(App)
app.use(ChakraUIVuePlugin);
domElements.forEach((tag) => {
  app.component(`chakra.${tag}`, chakra(tag));
});

app.mount('#app')
```

## Injecting Global Styles

Sometimes you may need to apply CSS reset styles to your application. Chakra UI provides a `CReset` component that removes browser default styles.

:::tip
The Chakra UI team recommends that you add the `CReset` component at the root of your application to ensure that the components work properly.
:::
In your `App.vue` file, you can configure the `CReset` component as shown below

```js
<script setup lang="ts">
import { CReset } from "@chakra-ui/vue-next"
</script>
<template>
  <c-reset/>
  <router-view/>
</template>
```
:::tip
:sparkles: Well done! You have successfully installed and configured Chakra UI into your Vue 3 application.
:::