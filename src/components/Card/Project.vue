<template>
  <a
    :href="project.link"
    class="
      grid
      rounded-md
      justify-items-center
      items-center
      p-4
      bg-gray-900 bg-opacity-30
    "
  >
    <Skeleton
      v-if="project.image"
      type="image"
      :image-url="project.image"
      class="rounded-tl rounded-tr"
    />
    <div class="grid items-center">
      <h1 class="text-lg font-bold">{{ project.title }}</h1>
      <p class="">{{ project.description }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    project: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      itemLoaded: false,
      backgroundSize: 'cover',
    }
  },
}
</script>

<style></style>
