<template>
  <header class="flex nav-header">
    <div class="branding flex">
      <img class="branding__img" src="@/assets/file-invoice-dollar-solid.png" alt="dollar-sign">
    </div>
  </header>
</template>

<script lang="ts">
export default{
name:"navigation-bar"
}
</script>

<style lang="scss" scoped>

.nav-header{
  z-index: 99;
  flex-direction: row;
  background-color: #1e2139;
  @media (min-width: 900px) {
    min-height: 100%;
    min-width: 90px;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
  }
  .branding {
    border-radius: 0 20px 20px 0;
    background-color: #7c5dfa;
    justify-content: center;
    padding: 24px;
    @media (min-width: 900px) {
      width: 100%;
    }
    .branding__img {
      width: auto;
      height: 30px;
    }
  }
}
</style>