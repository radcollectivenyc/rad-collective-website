<template>
  <div id="home">
    <div class="home-section" id="mailing-list">
      <div class="home-section-heading">Keep in touch!</div>
      <form id="mailing-list-form" @submit.prevent="subscribeToMailingList(email,first,last)">
        <div>Subscribe to our mailing list :)</div>
        <div class="input-container">
          <input id="first" name="first" v-model="first" placeholder="First Name"></input>
          <div class="form-error" v-show="attemptedSubmit && first === ''">Please let us know who you are!</div>
        </div>
        <div class="input-container">
          <input id="last" name="last" v-model="last" placeholder="Last Name"></input>
          <div class="form-error" v-show="attemptedSubmit && first && last === ''">Please give us your last name!</div>
        </div>
        <div class="input-container">
          <input id="email" name="email" v-model="email" placeholder="Email Address" type="email"></input>
          <div class="form-error" v-show="attemptedSubmit && first && last && email === ''">We need your email to email you!</div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="home-section" id="get-involved">
      <div class="home-section-heading">Upcoming events</div>
      <iframe id="calendar"
        src="https://luma.com/embed/calendar/cal-sw8QA8WDE2Uz9J4/events"
        frameborder="0"
        style="border: 1px solid #bfcbda88; border-radius: 4px;"
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
    <div class="home-section" id="learn-more">
      <div class="home-section-heading">A little bit about us...</div>
      <div class="content-box" style="display: flex; flex-direction: column;">
        <p>Hey there!</p>
        <p>We are a new NYC-based grassroots community for Resisting Automated Disempowerment (RAD) caused by AI and Big Tech. We just launched this month on July 11. If you want to check out the vibes firsthand, please register for one of our upcoming events on the Luma calendar above and pull up!</p>
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
  import { ref } from 'vue'
  import Announcement from '@/components/Announcement.vue'

  const email = ref('')
  const first = ref('')
  const last = ref('')

  const attemptedSubmit = ref(false)

  const subscribeToMailingList = (emailAddress, firstName, lastName) => {
    attemptedSubmit.value = true;
    if (emailAddress && firstName && lastName) {
      window.location.href = `https://radnyc.us16.list-manage.com/subscribe/post?u=9018387db6724adec5c864ae6&id=f15ad2ec50&f_id=00351be1f0&EMAIL=${emailAddress}&FNAME=${firstName}&LNAME=${lastName}`
    }
  }
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
#mailing-list-form {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .input-container {
    width: 100%;
    input {
      width: 100%;
      border-radius: 4px;
      border: 1px solid black;
      height: 32px;
      padding: 8px;
    }
    .form-error {
      font-size: 14px;
      color: red;
    }
  }
  
  button {
    width: fit-content;
    height: 36px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: black;
    background: var(--color-orange-light);
    padding: 4px 16px;
    border: none;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    border-radius: 18px;
    margin-top: 8px;
    cursor: pointer;
    &:hover {
      filter: brightness(0.95)
    }
  }
}
#calendar {
  width: 100%;
  height: 400px;
  background: white;
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
