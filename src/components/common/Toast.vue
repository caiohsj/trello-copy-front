<template>
  <div class="toast" v-if="show">
    <div class="container-icon">
      <icon-close
        @click="hideToast"
        class="icon"
      />
    </div>
    <p
      v-for="(text, i) in messages"
      :key="i"
    >
     {{ text }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import IconClose from "@/components/icons/IconClose.vue"
import { useToastStore } from "@/stores/toast"
import { storeToRefs } from "pinia"

const toastStore = useToastStore()
const hideToast = toastStore.hideToast

const { show, messages } = storeToRefs(toastStore)
</script>

<style lang="scss" scoped>
.toast {
  position: absolute;
  max-width: 360px;
  top: 20px;
  right: 20px;
  padding: 0px 12px;
  border-radius: 8px;
  background: #000000BB;
  color: #FFFFFF;

  .container-icon {
    display: flex;
    padding-top: 8px;
    fill: #4c9aff;

    .icon {
      max-width: 28px;
      margin-left: auto;

      &:hover {
        fill: #f9fafc;
        cursor: pointer;
      }
    }
  }
}
</style>
