<template>
  <a-card>
    <a-input
      v-model="formModel.filter.name.like"
      class="input"
      :placeholder="$t('index.search.form.input.placeholder')"
    ></a-input>
    <div>
      <a-button class="button" type="outline" @click="search">{{
        $t('index.search.form.search')
      }}</a-button>
      <a-button
        class="button"
        style="margin-left: 20px"
        type="outline"
        @click="searchRandom"
        >{{ $t('index.search.form.search.random') }}</a-button
      >
    </div>
  </a-card>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  import { ref } from 'vue';
  import { findImage, findRandomImage } from '@/api/search';

  const { t } = useI18n();

  const generateFormModel = () => {
    return {
      filter: {
        name: {
          like: '',
        },
      },
    };
  };
  const formModel = ref(generateFormModel());
  const search = async (form) => {
    await findImage(form).then((res) => {
      console.log(res);
    });
  };

  const searchRandom = async () => {
    await findRandomImage().then((res) => {
      console.log(res);
    });
  };
</script>

<style scoped>
  .input {
    width: 70%;
    height: 50px;
    margin-top: 10%;
    margin-left: 15%;
    margin-bottom: 25px;
  }
  .button {
    width: 120px;
    height: 40px;
    margin-left: 35%;
    display: inline-block;
  }
</style>
