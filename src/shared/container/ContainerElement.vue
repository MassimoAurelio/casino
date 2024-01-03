<template>
  <div class="container"><slot></slot></div>
</template>

<style scoped>
.container {
  max-width: 1970px;
  margin: 0 auto;
  padding-left: 8%;
  padding-right: 8%;
}

@media screen and (max-width: 1440px) {
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding-left: 2%;
    padding-right: 2%;
  }
}


@media screen and (max-width: 761px) {
  .container {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 3%;
    padding-right: 3%;
  }
}
</style>
