<template>
  <div id="testimony">
    <div class="section" id="about-us">
      <div class="section-heading">NYC City Council Testimony 10/5/2026</div>
      <div class="embedded-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IejFLhF8efQ?si=z0Alskfzz7Fi97vI&amp;start=32379" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.embedded-video {
  margin: auto;
}


#testimony {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: left;
  line-height: 1.6;
  margin: 0 auto;
}
.section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  .section-heading {
    font-size: 24px;
  }
  .section-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 12px;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
    margin: 0 16px;
  }
}
img {
  width: 90%;
  border-radius: 4px;
  margin: 16px auto;
}

@media (max-width: 768px) {
  .section {
    .section-heading {
      font-size: 18px;
    }
  }
}
</style>
