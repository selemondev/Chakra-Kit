<script setup lang="ts">
import CountTest from "../../demos/CountTest.vue"
</script>
# Authentication

A form is an important part of an authentication system that can be used to collection data from the user based on multiple input types such as text, email, number, password, URL, phone number, and more.

On this page you will find different types of common form layouts based on multiple variants, styles, colors, and sizes.

## React Form

The form utilizes two packages for form handling and validation. These packages include `formik` for handling the form and `yup` for validation respectively.

To install these packages, simply run the following commands in your terminal: 

With NPM : 

```bash
npm install formik --save
```

With YARN: 

```bash
yarn add formik
```

To install `yup` run the following command in your terminal:

With NPM :

```bash
npm i yup
```

The font we are going to be using is `Inter` and it has been configured in the `theme` directory. You can learn more about font configuration [here](https://chakra-ui.com/community/recipes/using-fonts)

<CountTest/>
::: details View code
<<< @/demos/CountTest.vue
:::

The forms below are examples of different form layouts that are responsive and have built-in validation configured using formik and yup.

## React Sign Up Form Example

<iframe src="https://codesandbox.io/embed/authentication-react-form-g9js2r?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Authentication-React-Form"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## React Login Form Example

<iframe src="https://codesandbox.io/embed/chakra-kit-authentication-login-form-92wzx3?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Chakra-Kit-Authentication-Login-Form"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


## React Social Auth Form Example

<iframe src="https://codesandbox.io/embed/eager-brook-pkg2s3?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="eager-brook-pkg2s3"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>




