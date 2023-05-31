<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <Toc />
    </template>
    <template #page-bottom>
      <div class="custom-footer">Made with <span>❤️</span> by W3D</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.vuepress-toc {
  width: 200px;
  max-width: 100%;
  position: relative;
  right: 0;
  top: 2em;
  margin: 0rem 2.5rem 4rem 1rem;
  border-left: 1px solid var(--c-border);
}
.vuepress-toc li {
  max-width: 180px;
  list-style: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
}
.custom-footer {
  font-size: 10px;
  text-align: center;
}
.custom-footer span {
  font-size: 8px;
}
</style>