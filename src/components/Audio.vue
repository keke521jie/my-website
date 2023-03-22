<template>
    <audio ref="audio"
        src="https://m701.music.126.net/20230321185422/495a682200e7955fd552ccb2e555244d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096427826/cef8/dcf2/2b19/9bed4476199feacc382642d3bc35e22d.m4a"></audio>
</template>

<script setup>
import { ref,watch,toRef } from 'vue';
import { useMusicStore } from '../stores/music';
const audio = ref()
const musicStore = useMusicStore()
let isPlay = toRef(musicStore,'isPlay')
watch(isPlay,()=>{
    if(isPlay.value)
        audio.value.play()
    else
        audio.value.pause()
})
</script>

<style></style>