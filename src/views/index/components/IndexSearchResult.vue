<template>
  <a-list
    v-if="searched"
    :grid-props="{ gutter: 0, span: 6 }"
    :bordered="false"
    :loading="loading"
  >
    <a-list-item v-for="src in srcArray" :key="src">
      <a-list :bordered="false">
        <a-list-item>
          <a-image :src="src" width="256" footer-position="outer"></a-image>
        </a-list-item>
      </a-list>
    </a-list-item>
  </a-list>
</template>

<script setup>
  import { ref } from 'vue';
  import { Message } from '@arco-design/web-vue';
  import useLoading from '@/hooks/loading';

  const { loading, setLoading } = useLoading(false);

  const srcArray = ref([]);
  const searched = ref(false);

  const base64ToImg = (baseString) => {
    const img = new Image();
    img.src = `data:image/png;base64,${baseString}`;
    return img.src;
  };

  const fetchData = async (text) => {
    setLoading(true);
    searched.value = true;
    try {
      await fetch(`http://localhost:8080/api/imgs/${text}`)
        .then((response) => {
          // 检查响应状态，如果正常，则解析响应数据
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          // 在此处处理解析后的数据
          srcArray.value = data.map((item) => base64ToImg(item.base64));
        });
    } catch (err) {
      Message.error({
        content: 'Server Error',
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchRandomData = async () => {
    setLoading(true);
    searched.value = true;
    try {
      await fetch(`http://localhost:8080/api/imgs/random`)
        .then((response) => {
          // 检查响应状态，如果正常，则解析响应数据
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          // 在此处处理解析后的数据
          srcArray.value = data.map((item) => base64ToImg(item.base64));
        });
    } catch (err) {
      Message.error({
        content: 'Server Error',
      });
    } finally {
      setLoading(false);
    }
  };

  defineExpose({
    fetchData,
    fetchRandomData,
  });
</script>

<style scoped></style>
