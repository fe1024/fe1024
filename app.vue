<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
console.log("app");
</script>
<style lang="less">
body {
  background-position: 50%;
  background-size: 150%;
  --ca-bg-color-from: #253a4e;
  --ca-bg-color-to: #202940;
  background-color: var(--ca-bg-color-to);
  background-image: radial-gradient(
    circle,
    var(--ca-bg-color-from),
    var(--ca-bg-color-to)
  );
  .arco-menu {
    background-color: transparent;
    .arco-menu-item {
      &,
      &.arco-menu-disabled {
        background-color: transparent;
      }
    }
  }
}
</style>
