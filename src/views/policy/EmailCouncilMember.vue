<template>
  <div id="email-council">
    <div class="section">
      <div class="section-heading">Email your council member</div>
      <div class="section-content">
        <p>Our <RouterLink to="/policy/letter-to-city-council">letter to the City Council</RouterLink> is now live and ready to be sent out! We'd love as many people as possible to send it, even to the same reps, as it signals strong support. Enter your name and address below and we'll find your council member and fill in the email for you. Feel free to personalize it!</p>
        <div class="input-container">
          <input v-model="name" placeholder="Your Full Name">
        </div>
        <div class="input-container" v-click-outside="hideSuggestions">
          <input v-model="address" placeholder="Your NYC Address" autocomplete="off" @input="onAddressInput()">
          <div v-if="suggestions.length" class="suggestions">
            <button v-for="s in suggestions" :key="s.properties.label" type="button" @click="pickAddress(s)">{{ s.properties.label }}</button>
          </div>
          <div class="note">For NYC residents. Your address is only used to find your district. We don't store it.</div>
        </div>

        <div v-if="lookupFailed" class="input-container">
          <div>Sorry, we couldn't find your district. Pick your council member below, or <a href="https://council.nyc.gov/map-widget/" target="_blank">look up your district</a>.</div>
          <select v-model="member">
            <option v-for="m in councilMembers" :key="m.district" :value="m">District {{ m.district }}: {{ m.name }}</option>
          </select>
        </div>

        <template v-if="member">
          <p>Your council member: <strong>{{ member.name }}</strong>, District {{ member.district }}<span v-if="neighborhood"> ({{ neighborhood }})</span></p>
          <a class="orange-button" :href="mailtoLink">Open in email app</a>
          <div class="doodle-box">
            <div class="note">No email app? Copy these into Gmail or any email.</div>
            <div><strong>To:</strong> {{ member.email }}</div>
            <div><strong>Subject:</strong> {{ subject }}</div>
            <div class="email-body">{{ body }}</div>
            <div class="copy-buttons">
              <button type="button" @click="copy(member.email, 'email')">{{ copied === 'email' ? 'Copied!' : 'Copy email address' }}</button>
              <button type="button" @click="copy(subject, 'subject')">{{ copied === 'subject' ? 'Copied!' : 'Copy subject' }}</button>
              <button type="button" @click="copy(body, 'body')">{{ copied === 'body' ? 'Copied!' : 'Copy message' }}</button>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div v-if="name && member" class="section">
      <div class="section-heading">Then pull up to the hearing!</div>
      <div class="section-content">
        <div><strong>Committee of the Whole Hearing on AI</strong></div>
        <p>Join RAD Collective at this historic hearing where all 51 members of the City Council are convening to discuss the "Risks Posed by Artificial Intelligence" and the bills they have proposed to address these risks. Representatives from all major US frontier AI labs (Anthropic, OpenAI, Google, Meta, and SpaceXAI) are expected to participate.</p>
        <p>We'll be meeting at City Hall early to secure seats together, and we'll debrief after if time allows. Can't make it in person? You can also watch the hearing virtually.</p>
        <div>
          <div class="event-detail"><img alt="calendar icon" src="/icons/calendar-days.svg">Monday, Oct 5, 11 AM</div>
          <div class="event-detail"><img alt="location dot icon" src="/icons/location-dot.svg">Council Chambers, 2nd Floor, City Hall</div>
        </div>
        <div class="note">Heads up: you'll go through NYPD security and metal detectors, so let them know which hearing you're attending. Food, beverage containers, and signs larger than 8.5" x 11" aren't allowed in the hearing room.</div>
        <a class="orange-button" target="_blank" href="https://luma.com/yo6ejttw">RSVP</a>
        <p>And join us on Oct 7 to talk about the hearing and next steps! <a href="https://luma.com/ow7pp1fj" target="_blank">RSVP here</a>.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { councilMembers, type CouncilMember } from '@/data/councilMembers'

const name = ref('')
const address = ref('')
const suggestions = ref<any[]>([])
const member = ref<CouncilMember>()
const neighborhood = ref('')
const lookupFailed = ref(false)
const copied = ref('')

let typingTimer: ReturnType<typeof setTimeout>

const onAddressInput = () => {
  member.value = undefined
  lookupFailed.value = false
  clearTimeout(typingTimer)
  typingTimer = setTimeout(getSuggestions, 300)
}

const getSuggestions = async () => {
  if (address.value.length < 3) {
    suggestions.value = []
    return
  }
  try {
    const res = await fetch(`https://geosearch.planninglabs.nyc/v2/autocomplete?text=${encodeURIComponent(address.value)}`)
    const data = await res.json()
    suggestions.value = data.features.slice(0, 5)
  } catch {
    lookupFailed.value = true
  }
}

const hideSuggestions = () => {
  suggestions.value = []
}

const pickAddress = async (suggestion: any) => {
  address.value = suggestion.properties.label
  neighborhood.value = suggestion.properties.neighbourhood || ''
  suggestions.value = []
  const [lng, lat] = suggestion.geometry.coordinates
  try {
    const res = await fetch(`https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/NYC_City_Council_Districts/FeatureServer/0/query?geometry=${lng},${lat}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&outFields=CounDist&returnGeometry=false&f=json`)
    const data = await res.json()
    const district = data.features[0].attributes.CounDist
    member.value = councilMembers.find(m => m.district === district)
  } catch {
    member.value = undefined
  }
  lookupFailed.value = !member.value
}

const copy = async (text: string, what: string) => {
  await navigator.clipboard.writeText(text)
  copied.value = what
  setTimeout(() => copied.value = '', 2000)
}

const subject = 'Comments on City Council Bills ahead of Monday’s AI Hearing (RAD Collective)'

const body = computed(() => {
  const district = `Council District ${member.value?.district}`
  const where = neighborhood.value ? `${neighborhood.value} (${district})` : district
  return `Dear Council Member ${member.value?.name},

I live in ${where} and I am concerned about the risks AI models pose to myself and other New Yorkers.

I am writing in support of RAD Collective NYC, a coalition of local constituents, ahead of the October 5 Committee of the Whole hearing on AI. We strongly support the Council’s leadership in regulating automated systems and wanted to share our technical feedback on the bills introduced.

Please review RAD’s published analysis on their website: https://radnyc.net/policy/letter-to-city-council. Thank you for taking the time to review my feedback ahead of the hearing.

Best regards,
${name.value || '[Your Name]'}`
})

const mailtoLink = computed(() => `mailto:${member.value?.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.value)}`)
</script>

<style scoped lang="scss">
#email-council {
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
  }
}
.input-container {
  width: 100%;
  max-width: 400px;
  input, select {
    width: 100%;
    border-radius: 4px;
    border: 1px solid black;
    height: 40px;
    padding: 8px;
    font-size: 16px;
    background: white;
  }
}
.suggestions {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid black;
  border-radius: 4px;
  button {
    text-align: left;
    font-size: 14px;
    padding: 8px;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    &:hover {
      background: rgba(255, 148, 43, 0.2);
    }
  }
}
.note {
  font-size: 14px;
  color: #666;
}
.orange-button {
  width: fit-content;
  height: 44px;
  font-size: 18px;
  font-weight: bold;
  line-height: 36px;
  color: black;
  text-decoration: none;
  background: var(--color-orange-light);
  padding: 4px 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 22px;
  &:hover {
    background: var(--color-orange-light);
    filter: brightness(0.95)
  }
}
.event-detail {
  display: flex;
  gap: 8px;
  align-items: center;
  img {
    height: 18px;
    width: 18px;
  }
}
.email-body {
  white-space: pre-wrap;
}
.copy-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  button {
    height: 36px;
    font-size: 14px;
    font-weight: bold;
    color: black;
    background: var(--color-orange-light);
    padding: 4px 16px;
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    cursor: pointer;
    &:hover {
      filter: brightness(0.95)
    }
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
