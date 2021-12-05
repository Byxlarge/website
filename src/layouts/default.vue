<template>
  <div
    class="flex relative min-h-screen flex-col items-center bg-gray-200 scrollbar text-black dark:(bg-black text-gray-50)"
  >
    <div
      class="md:flex hidden focus:outline-none"
      :class="{
        'fixed w-full max-h-[100vh]': itemLoaded === false,
      }"
      :style="{
        backgroundImage: itemLoaded === true ? `url('${image}')` : '',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }"
    >
      <img
        :src="image"
        class="invisible"
        draggable="false"
        alt="image"
        width="100%"
        height="100%"
        @load="itemLoaded = true"
      />
    </div>
    <div
      class="w-full absolute z-20 flex flex-col items-center h-full"
      :class="{ 'text-white': itemLoaded }"
    >
      <transition name="fade" mode="out-in">
        <NavDefault class="sticky top-0 z-40" />
      </transition>

      <div
        class="flex flex-col w-11/12 md:w-9/12 my-6 z-10 h-full flex-grow items-start justify-center"
      >
        <Nuxt class="flex-grow" />
      </div>
      <NavFooter
        class="dark:(bg-gray-900 bg-opacity-30) bg-gray-300 bg-opacity-30"
        v-if="$route.path.includes('blog')"
      />
      <div class="bg-green-600 h-2 w-full" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: '',
      itemLoaded: false,
    }
  },
  async fetch() {
    const { data: img } = await this.$axios.get(
      'https://bing.biturl.top/?resolution=1920&format=json&index=0&mkt=zh-CN'
    )
    console.log(img)
    this.image = img.url
  },
}
</script>

<style></style>
