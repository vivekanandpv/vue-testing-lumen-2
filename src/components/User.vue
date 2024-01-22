<template>
    <input type="text" data-testid="user-input" :value="message">
    <button data-testid="change-button" @click="changeText">Change</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('');

const changeText = () => message.value = 'Good day!';
</script>