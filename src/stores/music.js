import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMusicStore = defineStore('music', () => {
  let isPlay = ref(false)
  function changeIsPlay(){
    isPlay.value = !isPlay.value
  }
  return { isPlay, changeIsPlay }
})
