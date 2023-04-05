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
  import { findImage, findRandomImage } from '@/api/search';
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

  const fetchData = async (id) => {
    setLoading(true);
    searched.value = true;
    try {
      // todo: 从后端获取图片数据
      // const { data } = await findImage(id);
      // srcArray.value = data.map((item) => base64ToImg(item));
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
      // todo: 从后端获取图片数据
      // const { data } = await findRandomImage();
      const data = await findRandomImage();
      srcArray.value = data.map((item) => base64ToImg(item));
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
