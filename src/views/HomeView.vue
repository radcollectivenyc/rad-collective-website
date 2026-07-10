<template>
  <div id="home">
    <div class="home-section" id="get-involved">
      <div class="home-section-heading">Get involved!</div>
      <Announcement/>
    </div>
    <div class="home-section" id="get-involved">
      <div class="home-section-heading">More upcoming events</div>
      <iframe id="google-calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&mode=AGENDA&src=MGRjNmViYmRjMzZhOGI3YjBjOGQyYTMzMzIzYzA5MWRhMjc3ZTMyODQxYmQ3MzFmNThiYWI2OWQ2NGQyNjk2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23FF5E2B" style="border:solid 1px #777" frameborder="0" scrolling="no"></iframe>
    </div>
    <div class="home-section" id="learn-more">
      <div class="home-section-heading">A little bit about us...</div>
      <div class="content-box" style="display: flex; flex-direction: column;">
        <p>Hey there!</p>
        <p>We are a new NYC-based grassroots community for Resisting Automated Disempowerment (RAD) caused by AI and Big Tech. We launch this month on July 11. If you want to check out the vibes firsthand, please register for our first official event using the link above and pull up!</p>
        <p><strong>Join us to help shape a future worth living in!</strong></p>
        <p style="text-align: center;">You can read more <a href="/about">here</a>.</p>
        <!-- <img class="doodle-divider" src="/hr-doodle.svg" alt=""/> -->
      </div>
    </div>
    <div class="home-section">
      <img style="margin: auto;" src="@/assets/hammer.gif" alt=""/>
      <p style="max-width: 320px; text-align: center; margin: auto">Our website is <i>always</i> under construction! We are continuing to add content to the site as we grow this community.</p>
    </div>
  </div>
</template>

<script setup>
  import LinkTree from '@/components/LinkTree.vue'
  import Announcement from '@/components/Announcement.vue'
</script>

<style scoped lang="scss">
#home {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 64px;
}
.home-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .home-section-heading {
    font-size: 24px;
  }
}
#google-calendar {
  width: 100%;
  height: 400px;
}
.content-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-style: solid;
  border-width: 10px;
  border-image: url(/border-large.svg) 10 10 10 10 stretch stretch;
  background: white;
  border-radius: 10px;
}
p {
  color: #333;
  margin-bottom: none;
  font-size: 1em;
}
.proposal {
  color: #e74c3c;
  font-size: 1.1em;
  margin-bottom: 20px;
}
.proposal strong {
  font-weight: 600;
}

.doodle-divider {
  display: block;
  width: 60%;
  margin: 16px auto;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .home-top {
    flex-direction: column;
  }
  .home-section {
    .home-section-heading {
      font-size: 18px;
    }
  }
  .content-box {
    padding: 20px;
  }
}
</style>
