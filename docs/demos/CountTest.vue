<script setup lang="ts">
import { CFlex, CBox, CButton, CLink, CText } from "@chakra-ui/vue-next";
import { ref } from "vue";
const count = ref<number>(0);
const increment = (): number => {
    return count.value++
}
</script>

<template>
    <CFlex align="center" justify="center">
        <CBox font-family="sans-serif" mt="14">
            <CBox w="100%" p="5">
                <CFlex align="center" justify="center" mt="2">
                    <CLink href="https://chakra-ui.com">
                        <chakra.img w="100px"
                            src="data:image/svg+xml,%3Csvg viewBox='0 0 257 257' xmlns='http://www.w3.org/2000/svg' class='css-89iovl'%3E%3Crect width='257' height='257' rx='128.5' fill='url(%23mark)'%3E%3C/rect%3E%3Cpath d='M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z' fill='%23fff'%3E%3C/path%3E%3Cdefs%3E%3ClinearGradient id='mark' x1='128.5' x2='128.5' y2='257' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%237BCBD4'%3E%3C/stop%3E%3Cstop offset='1' stop-color='%2329C6B7'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" />
                    </CLink>
                    <CLink href="https://vuejs.org/">
                        <chakra.img w="100px"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png?20170919082558" />
                    </CLink>
                </CFlex>
                <CBox>
                    <CText align="center" mt="10" font-weight="bold" :font-size="{ base: '24px', md: '38px' }">Chakra UI
                        + Vue 3 + TypeScript</CText>
                    <CText align="center" mt="2" :font-size="{ base: '16px', md: '24px' }" font-weight="extra-bold">This
                        project is scaffolded using
                        create-chakra@latest</CText>
                    <CText align="center" mt="2" :font-size="{ base: '18px', md: '24px' }" font-weight="bold">Please
                        leave a star if you like it.</CText>
                </CBox>

                <CBox align="center" mt="4">
                    <CButton @click="increment()">Count is : {{ count }}</CButton>
                </CBox>
            </CBox>
        </CBox>
    </CFlex>
</template>