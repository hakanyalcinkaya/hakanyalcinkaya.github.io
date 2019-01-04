<template>
  <div v-if="$page.frontmatter.youtube">
    <iframe
    width="100%"
    height="500"
    :src="'https://www.youtube.com/embed/' + $page.frontmatter.youtube"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
    >
    </iframe>
  </div>

</template>
