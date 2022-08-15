<template>
  <div
    v-if="props.modelValue"
    class="base-modal fixed top-0 left-0 w-screen h-screen flex items-center justify-center"
  >
    <div class="content bg-gray-50 rounded-md shadow-xl">
      <button @click="handleClose" class="flex w-full justify-end pt-1 pr-1">
        <icon-close class="fill-gray-600 w-4" />
      </button>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconClose from "@/components/icons/IconClose.vue";
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const handleClose = () => {
  emit("update:modelValue", false);
};
</script>

<style lang="scss" scoped>
@keyframes scale-in-center {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.base-modal {
  background-color: rgba(100, 116, 139, 0.7);
  .content {
    animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    z-index: 2;
  }
}
</style>
