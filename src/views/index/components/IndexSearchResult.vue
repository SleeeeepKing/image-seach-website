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
          <a-image :src="src" width="256" footer-position="outer"> </a-image>
        </a-list-item>
      </a-list>
    </a-list-item>
  </a-list>
</template>

<script setup>
  import { findImage } from '@/api/search';
  import { ref } from 'vue';
  import { Message } from '@arco-design/web-vue';
  import useLoading from '@/hooks/loading';

  const { loading, setLoading } = useLoading(false);

  const srcArray = ref([]);
  const searched = ref(false);

  const arrayToImg = (imageData) => {
    // 从后端接收到了一个名为 imageData 的 512 位的 float 数组

    // 创建一个 canvas 元素
    const canvas = document.createElement('canvas');
    canvas.width = 256; // 假设图片大小为 256x256
    canvas.height = 256;

    // 获取 canvas 的上下文对象
    const ctx = canvas.getContext('2d');

    // 创建一个 ImageData 对象
    const imageDataObj = new ImageData(256, 256);

    // 将 float 数组转换为 ImageData 对象
    for (let i = 0; i < imageData.data.length; i += 4) {
      const value = imageData[i / 4];
      imageDataObj.data[i] = value * 255; // 红色通道
      imageDataObj.data[i + 1] = value * 255; // 绿色通道
      imageDataObj.data[i + 2] = value * 255; // 蓝色通道
      imageDataObj.data[i + 3] = 255; // 不透明度
    }

    // 将 imageDataObj 对象绘制到 canvas 上
    ctx.putImageData(imageDataObj, 0, 0);

    // 创建一个 Image 元素并设置其 src 属性为 canvas 的 data URL
    const image = new Image();
    image.src = canvas.toDataURL();
    // 返回src地址
    return image.src;
  };
  const fetchData = async (params) => {
    setLoading(true);
    searched.value = true;
    try {
      // todo: 从后端获取图片数据
      // const { data } = await findImage(params);
      // srcArray.value = data.map((item) => arrayToImg(item));
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
      // srcArray.value = data.map((item) => arrayToImg(item));
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
