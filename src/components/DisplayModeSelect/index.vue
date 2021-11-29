<template>
  <div class="main__header__display-mode-select">
    <label
      v-for="item in displayTypes"
      :key="item.value"
      :class="{
        'main__header__display-mode-select__item': true,
        'main__header__display-mode-select__item--active':
          displayType === item.value,
      }"
    >
      <input
        type="radio"
        name="displayType"
        :value="item.value"
        @input="onSelect"
      />
      <component :is="item.icon" :size="14"></component>
      <span class="main__header__display-mode-select__item__text">{{
        item.text
      }}</span>
    </label>
  </div>
</template>

<script>
  import GridOutlined from '@icons/GridOutlined';
  import ListOutlined from '@icons/ListOutlined';
  import FilesDisplayTypes from '@const/filesDisplayTypes';

  export default {
    name: 'DisplayModeSelect',
    components: { GridOutlined, ListOutlined },
    emits: ['input'],
    data() {
      return {
        displayType: FilesDisplayTypes.Grid,
        displayTypes: [
          { value: FilesDisplayTypes.Grid, text: 'Grid', icon: GridOutlined },
          { value: FilesDisplayTypes.List, text: 'List', icon: ListOutlined },
        ],
      };
    },
    watch: {
      displayType(value) {
        this.$emit('input', value);
      },
    },
    methods: {
      onSelect(e) {
        this.displayType = e.target.value;
      },
    },
  };
</script>

<style scoped lang="scss">
  .main__header__display-mode-select {
    @apply flex flex-row items-center;
    @apply border border-indigo-100;
    @apply rounded-3xl;
    @apply p-0.5;
  }

  .main__header__display-mode-select__item {
    @apply relative;
    @apply flex flex-row items-center;
    @apply rounded-3xl;
    @apply px-4 py-1;
    @apply cursor-pointer;
    @apply transition-colors duration-500;

    &--active {
      @apply bg-indigo-100;
      @apply text-indigo-600;
    }

    input {
      @apply invisible;
      @apply absolute;
    }
  }

  .main__header__display-mode-select__item__text {
    @apply ml-2;
  }
</style>
