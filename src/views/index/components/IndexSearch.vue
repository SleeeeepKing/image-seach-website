<template>
  <a-card>
    <a-form>
      <a-input
        class="input"
        :placeholder="$t('index.search.form.input.placeholder')"
      ></a-input>
      <div>
        <a-button class="button">123</a-button>
        <a-button class="button" style="margin-left: 20px">456</a-button>
      </div>
    </a-form>
  </a-card>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
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
