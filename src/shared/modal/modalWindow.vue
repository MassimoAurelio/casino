<script setup lang="ts"></script>

<template>
 <form class="modal">
   <div class="modal_header">
     <slot name="header"></slot>
   </div>
   <div class="modal_content">
     <slot></slot>
   </div>
   <div class="modal_footer">
     <slot name="footer"></slot>
   </div>
 </form>
</template>

<style scoped>

.modal{
  padding: 25px;
}
.modal_content {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
}

.modal_header{
  width: 100%;
}
</style>