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

@media screen and (max-width: 1439.99px) {
  .container {
    max-width: 980px;
    padding-left: unset;
    padding-right: unset;
  }
}

@media screen and (max-width: 993px) {
  .container {
    max-width: 760px;
    padding-left: unset;
    padding-right: unset;
  }
}


</style>
