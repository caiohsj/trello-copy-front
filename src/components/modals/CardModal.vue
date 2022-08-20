<template>
  <base-modal v-model="cardStore.showCardModal">
    <div class="card-modal p-4">
      <div class="pl-2" v-if="cardStore.getCard.id != 0">
        #{{ cardStore.getCard.id }}
      </div>

      <textarea
        @input="setTitleHeight"
        :style="[dynamicTitleHeight]"
        :placeholder="$t('components.modals.cardModal.placeholders.title')"
        v-model="cardStore.getCard.title"
        class="w-full ease-in-out duration-300 outline-2 focus:outline-blue-400 bg-transparent outline-none p-2 font-bold overflow-hidden break-words resize-none"
        id="inputTitleCard"
      />

      <div class="mt-6">
        <label>Descrição</label>

        <textarea
          @input="setDescriptionHeight"
          :style="[dynamicDescriptionHeight]"
          :placeholder="
            $t('components.modals.cardModal.placeholders.description')
          "
          v-model="cardStore.getCard.description"
          class="description w-full border-2 border-gray-800 bg-transparent outline-2 outline-blue-400 pt-2 pl-2 overflow-hidden break-words resize-none"
          id="inputDescriptionCard"
        />
      </div>

      <button
        @click="handleSaveCard"
        class="rounded-md bg-blue-500 text-white py-2 px-8"
      >
        {{ $t("components.modals.cardModal.saveButton") }}
      </button>
    </div>
  </base-modal>
</template>

<script lang="ts" setup>
import BaseModal from "./BaseModal.vue";
import { useCardStore } from "@/stores/card";
import { computed, ref } from "vue";

const titleHeight = ref(34);
const descriptionHeight = ref(84);
const cardStore = useCardStore();

const handleSaveCard = () => {
  cardStore.saveCard();
};

const setTitleHeight = (e: any) => {
  titleHeight.value = e.target.scrollHeight;
};

const setDescriptionHeight = (e: any) => {
  descriptionHeight.value = e.target.scrollHeight;
};

const dynamicTitleHeight = computed(() => {
  return `height: ${titleHeight.value}px;`;
});

const dynamicDescriptionHeight = computed(() => {
  return `height: ${descriptionHeight.value}px;`;
});
</script>

<style lang="scss" scoped>
.card-modal {
  width: 480px;

  .description {
    min-height: 84px;
  }
}
</style>
