<template>
<div>
  <h1 style="color:#27ae60;">{{ $page.title }}</h1>
  <hr>
  <div
  v-if="$page.frontmatter.date &&
  $page.frontmatter.category !='Page'"
  style="margin-bottom:30px;color:#34495e;font-size:12px;"
  >{{$page.frontmatter.date}}</div>
</div>
</template>
