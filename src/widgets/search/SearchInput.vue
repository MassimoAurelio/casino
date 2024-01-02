<script setup lang="ts">
import Field from '@/shared/field'


</script>

<template>
  <div class="main-container">
    <div class="field-container">
      <Field size="m" placeholder="Search Game">
        <template #rightIcon>
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
      </Field>
    </div>
    
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2%;
}

.field-container {
  min-width: 270px;
  width: 300%;
}

.button {
  height: 30px;
  width: 30px;
  box-shadow: 5px 5px 5px rgba(0.1, 0.1, 0.1, 0.1);
}

@media screen and(min-width:776px) {
  .field-container {
  width: auto;
}
}
</style>
