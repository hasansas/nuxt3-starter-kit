<template>
  <section class="nuxtstarter-hero-section px-0" style="overflow: hidden">
    <div class="mesh-bg"></div>
    <v-container class="main-container">
      <v-card
        flat
        color="transparent"
        width="600"
        class="d-flex align-center justify-center mx-auto"
      >
        <div class="text-center">
          <div class="mb-10">
            <v-chip> Made with WebStarter UI Kit </v-chip>
          </div>
          <h1 class="text-h2 font-weight-bold">Build your landing in seconds</h1>
          <p class="text-h6 mt-4 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </p>
          <div class="mt-10">
            <v-btn variant="flat" rounded size="x-large" dark color="black">
              <span>Get started</span>
              <v-icon class="ml-4">ri-arrow-right-line</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
// ===== nuxtstarter Hero Section Styles =====
// - Main hero section and layered mesh background
// - Includes hero content, artwork, and preview card components

.nuxtstarter-hero-section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: none;

  // Content block, centered above mesh background
  .nuxtstarter-hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
  }

  // Animated pastel mesh background
  .mesh-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    z-index: 1;
    pointer-events: none;
    background: radial-gradient(circle at 30% 50%, #88edc0 0%, transparent 55%),
      radial-gradient(circle at 60% 20%, #b9fbc0 0%, transparent 60%),
      radial-gradient(circle at 70% 80%, #ffc6ff 0%, transparent 60%),
      radial-gradient(circle at 50% 60%, #fff1b8 0%, transparent 65%);
    animation: meshmove 8s ease-in-out infinite alternate;
    opacity: 0.9;
    filter: blur(8px) saturate(1.18);
  }

  // Hero artwork area
  .nuxtstarter-hero-art {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

// ===== Mesh Background Animation =====
@keyframes meshmove {
  0% {
    background-position: 30% 50%, 60% 20%, 70% 80%, 50% 60%;
  }
  100% {
    background-position: 33% 52%, 65% 24%, 72% 76%, 52% 62%;
  }
}

// ===== Preview Card Styles =====
.preview-card {
  width: 100%;
  padding: 44px 32px 30px;
  background: #fff;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: rotate(4deg);
  margin: 40px auto;
  position: relative;

  // Icon inside card
  .preview-icon {
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background: #e7f1fe;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    // Material symbol inside icon
    .material-symbols-rounded {
      color: #5392f9;
      font-size: 36px;
    }
  }

  // Preview line components
  .preview-line {
    border-radius: 7px;
    background: #e9ecf6;
    margin-bottom: 14px;

    &.preview-line-lg {
      width: 80%;
      height: 15px;
    }

    &.preview-line-md {
      width: 50%;
      height: 13px;
    }
  }

  // Preview grid area
  .preview-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;
    margin: 25px 0 18px 0;

    // Each cell in grid
    .preview-cell {
      height: 35px;
      border-radius: 7px;
      background: #e7f1fe;

      &.darken {
        background: #e4ebff;
      }
    }
  }

  // Button-like bar at card bottom
  .preview-button {
    width: 92%;
    height: 14px;
    border-radius: 6px;
    background: linear-gradient(90deg, #e7f1fe 0%, #e4ebff 100%);
    margin-top: 10px;
  }
}
</style>
