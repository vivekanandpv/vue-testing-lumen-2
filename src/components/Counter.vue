<template>
    <h2>Counter Component</h2>
    <p>Hello, world!</p>
    <p data-testid="message-holder">{{ message }}</p>

    <h4>Counter: {{ counter }}</h4>

    <button @click="++counter">Increment</button>
</template>

<script setup lang="ts">
export interface CounterProps {
    message: string;
};


import { defineProps, ref } from 'vue';

const props = defineProps<CounterProps>();

const counter = ref(0);
</script>