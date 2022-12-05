<template>
  <div>
    <input type="text" v-model="id">
    <span v-if="pending">cargando</span>
    <div v-if="data" class="container"
      :style="{ 'background-image': `url('https://api.ambr.top/assets/UI/${data?.images.namegachasplash}.png')` }">
      <div v-if="data" class="card-container">
        <figure>
          <img :src="data.images.icon" :alt="data.name">
        </figure>
        <h1>{{ data.name }}</h1>
        <span>Rarity: {{ rarity(data).toString().split(',').join('') }} </span>
        <span>Element: {{ data.element }}</span>
        <span>Weapon: {{ data.weapontype }}</span>
        <span>Region: {{ data.region }}</span>
        <span>Birthday: {{ data.birthday }}</span>
        <span>Seiyuu: {{ data.cv.japanese }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const id = ref('Klee')

const url = computed(() => {
  return `https://genshin-db-api.vercel.app/api/characters?query=${id.value}&resultLanguage=Spanish`
})

const { data, pending } = await useFetch(url);

console.log(data)

const rarity = ({ rarity }) => {
  if (!rarity) return '';
  const cantidad = []
  for (let i = 0; i < parseInt(rarity[0]); i++) {
    cantidad.push('⭐')
  }
  return cantidad
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-repeat: no-repeat; */
  background-position: center;
  height: 100vh;
  width: 100vw;
}

.card-container {
  display: flex;
  flex-direction: column;
  width: 450px;
  background-color: darkslategrey;
  color: white;
  text-align: center;
  padding: 25px;
  font-family: Helvetica, sans-serif;
}

p {
  display: flex;
}
</style>