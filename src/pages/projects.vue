<template>
  <div class="flex flex-col items-start">
    <div class="grid">
      <h1 class="text-xl font-bold">Projects are made by me</h1>
      <div class="grid gap-3 sm:grid-cols-3 mt-2">
        <CardProject
          :project="project"
          v-for="(project, index) in projects"
          :key="`project-${index}`"
        />
      </div>
    </div>
    <div class="grid mt-2 w-full">
      <h1 class="text-xl font-bold">My repos</h1>
      <div v-if="$fetchState.pending" class="grid gap-3 sm:grid-cols-3 mt-2">
        <Skeleton
          type="repository"
          v-for="index in 9"
          :key="index"
          class="w-full h-full"
        />
      </div>
      <div v-else-if="$fetchState.error">
        Couldn't load GitHub repositories.
      </div>

      <div v-else-if="repos.length > 0" class="grid gap-3 sm:grid-cols-3 mt-2">
        <a
          v-for="(repo, index) in repos"
          :key="`repo-${index}`"
          :href="repo.html_url"
          target="_blank"
          class="w-full"
          rel="noreferrer"
          title="Click here to visit this repository"
        >
          <CardRepo
            :name="repo.name"
            :stars="repo.stargazers_count"
            :description="repo.description"
            class="h-full w-full"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getProjects() {
      return {
        featured: this.projects?.slice(0, 3),
        rest: this.projects.slice(3),
      }
    },
  },
  fetchOnServer: false,
  async fetch() {
    const { data: repos } = await this.$axios.get(
      'https://api.github.com/users/Byxlarge/repos?per_page=100'
    )
    this.repos = repos
      ?.filter((repo) => repo.fork === false)
      ?.sort((a, b) => b?.stargazers_count - a?.stargazers_count)
  },
  head() {
    const title = 'Projects'
    const description = 'You can see my projects, works and repos from here.'
    const href = `https://345dev.me/projects`
    const object = {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `mehmetali345, mehmetali345 blog, blog, teknoloji, vue, yazılım, discord, mehmetali_345, gönderi`,
        },
        // Open-Graph
        {
          hid: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: href,
        },
        // Twitter
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ].map((i) => {
        if (i.name && !i.property) i.property = i.name
        return i
      }),
      link: [
        {
          rel: 'canonical',
          href,
        },
      ],
    }
    return object
  },
}
</script>

<style></style>
