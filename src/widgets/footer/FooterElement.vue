<script setup lang="ts">
import Container from '@/shared/container'
import { useFooterLink } from '@/app/stores/useFooter'

const footerStore = useFooterLink()
</script>

<template>
  <footer class="footer">
    <Container>
      <div class="footer-container">
        <div class="pay-methods">pay-methods</div>
        <div class="link-container">
          <div class="links" v-for="item in footerStore.items" :key="item.label">
            <a :href="item.href">
              {{ item.label }}
            </a>
          </div>
        </div>

        <div class="providers">providers</div>
      </div>
    </Container>
  </footer>
</template>

<style scoped>
.footer {
  background-color: black;
}

.footer-container{
  padding: 20px
}

.link-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1vh;
  padding: 16px 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.pay-methods {
  padding: 16px 70px;
  color: aliceblue;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  
}

.links {
  color: var(--footer-link-color);
  text-decoration: underline;
}

.providers {
  padding: 16px 70px;
  width: 100%;
  color: aliceblue;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
