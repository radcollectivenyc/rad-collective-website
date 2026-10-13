<template>
  <div id="testimony">
    <div class="section" id="about-us">
      <div class="section-heading">New York City Council Testimony 10/5/2026</div>

      <div class="doodle-box">
        <p>On October 5, 2026, New York City Council convened a rare Committee of the Whole hearing on AI. Whistleblowers, industry representatives, city agencies, RAD co-lead Bryce Rogers, and many others testified at this 11-hour-long hearing. Video and transcript of Bryce's testimony are below.</p>
        <p>See our letter to the council <RouterLink to="/policy/letter-to-city-council">here</RouterLink>!</p>
        <p>Council Member and Committee on on Technology Chair De La Rosa (left) and Bryce (Right):</p>
        <div class="side-by-side">
          <img src="@/assets/2026-10-05-chair-de-la-rosa.png" alt="Description of photo" />
          <img src="@/assets/2026-10-05-bryce-testimony.png" alt="Description of photo" />
        </div>

      </div>

      <div class="embedded-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IejFLhF8efQ?si=z0Alskfzz7Fi97vI&amp;start=32379" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div class="section" id="employment">
        <div class="section-content">
          <p><strong>Testimony of Bryce Rogers<br>
            RAD Collective, Co-lead<br>
            Before the Committee of the Whole, New York City Council<br>
            Hearing on AI – October 5, 2026
          </strong></p>

          <p>I thank the Council for leading the charge on local AI legislation by convening this historic hearing. My name is Bryce Rogers. I’m a resident of the 34th Council District; I thank Council Member Gutiérrez for representing me. I’m co-lead of the Resisting Automated Disempowerment Collective, or RAD Collective, a New York City  grassroots community advocating for city and state AI policy that protects human life, joy, and democracy.</p>
          <p style="text-align: center;">~</p>
          <p>The great strength of humanity is our ability to transfer information to one other. We are blessed with expressive hands, faces, and voices, but have also constantly sought to augment our inherent communicative cabilities via technology.</p>
          <p>To collaborate on complex and abstract topics, we developed language and systems of measurement.</p>
          <p>To convey information farther than our voice can reach, we built postal services, telegraphs, and telephones.</p>
          <p>And to transmit messages across time, we’ve developed oral histories, library collections, and recently digital archives — the evolving means by which each generation inherits their predecessor’s infrastructure and wisdom.</p>
          <p>Through these technologies, humanity has accrued the wealth of information upon which artificial intelligence is predicated. AI distills the meaningful patterns from very large bodies of training data, not just navigating the information as a search engine does, but digesting it — converting our species’s informatic endowment into an inquirable, oracle-like machine.</p>
          <p>I can’t shake the feeling that this could’ve been beautiful — but it just doesn’t feel like us. These companies trained their products on millennia of our predecessors’ dogged achievement, only to deploy their tech to outcompete us, to spy on us, and to replace us.</p>
          <p>All of this is to say: <strong>democracy is the only righteous path forward</strong>. AI is built on the work of many, and its fate oughtn’t be dictated by a few self-regulating executives, regardless of how their spokespeople reassure us over Zoom.</p>
          <p>In this spirit, we again thank the Council for convening this forum of local Democracy, and implore you to foreground the diverse constituent voices of New York City in your legislation. RAD wrote a letter to the Council with input on the 10 Introductions proposed, that I’d love for you to check out if you haven’t already.</p>
          <p>We look forward to advancing the Moral Frontier of AI policy, together.</p>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.embedded-video {
  margin: auto;
}

.side-by-side{
  display: flex;
  flex-direction: row;
  img {
    width: 48%
  }
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
