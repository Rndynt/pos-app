<template>
  <div>
    <h2>Test Page One</h2>
    <p>This is the first test page.</p>

    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'TestPageOne',
  setup() {
    const data = ref<any[]>([]);  // Menyimpan data yang diterima

    // Fungsi untuk mengambil data dari backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/apis/test/data');
        data.value = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Ambil data saat halaman dimuat
    onMounted(() => {
      fetchData();
    });

    return { data };
  },
});
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
