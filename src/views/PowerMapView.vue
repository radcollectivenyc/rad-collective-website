<template>
  <div id="power-map">
    <div class="section">
      <div class="section-heading">Power Map</div>
      <div class="section-content">
        <p><strong>New project alert!</strong></p>
        <p>RAD is building an interactive tool to map out who has the power to govern AI in New York, from NYC committees to the governor's office.</p>
        <p>Why are we making this? Understanding the system of power that we exist in will help RAD identify key targets for future policy campaigns. We hope that other political advocacy groups in NY will find it useful, too, which is why we're making it publicly available on our site.</p>
        <p>Check back for future updates!</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#power-map {
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
  .section-heading {
    font-size: 24px;
  }
  .section-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 16px;
  }
}

@media (max-width: 768px) {
  .section {
    .section-heading {
      font-size: 18px;
    }
  }
}
</style>
