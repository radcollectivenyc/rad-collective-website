<template>
  <div id="about">
    <div class="section" id="about-us">
      <div class="section-heading">About Us</div>
      <div class="section-content">
        <p>Welcome to our site! We are so excited for you to be here, and we have so much to tell you about!</p>
        <p>RAD Collective is officially launching this month. Before constructing a new group vision and starting RAD, many of our members led and volunteered their efforts for the now-defunct PauseAI NYC, a local group of PauseAI US.</p>
        <p>So who are we? We are NYC residents and folks from the surrounding area who all share a concern about AI safety, and <u>are willing to do something about it</u>. Our leaders and members come from a variety of backgrounds including (but not limited to) software engineering, teaching, web development, political organizing, AI research, art, film, and more! There is no prerequisite to join!</p>
        <p>Our group is growing quickly, and we would love to have you join us if you're in the area.</p>
      </div>
    </div>
    <div class="section" id="what-we-do">
      <div class="section-heading">What We Do</div>
      <div class="section-content">
        <p>We discuss and advocate for AI safety at multiple levels. We have group discussions at our general meetings, call our representatives, and canvas/table on the streets of NYC! We advocate for a global treaty on AI development, along with domestic state and federal-level legislation that promotes safety in the AI industry. We recently got a win at the NY state level with the passage of the <a href="https://www.nysenate.gov/legislation/bills/2025/A6453/amendment/A" target="_blank">RAISE Act</a> (sponsored by <a href="https://www.nytimes.com/2025/10/20/nyregion/alex-bores-ny-congress-primary.html">former congressional candidate Alex Bores</a>). This bill, while weaker than we would have hoped, serves as a huge milestone for AI regulation in the USA, being only the second bill of its kind nationwide (the other one being the <a href="https://legiscan.com/CA/text/SB53/id/3041703" target="_blank">California bill SB 53</a>). Our NYC group made hundreds of phone calls to the governor's office to move the needle and make that possible. If you want to make <i>real</i> change on this issue, we are the group to join.</p>
        <p>We meet in real life!! Here is a photo of us before forming RAD, at the PauseAI NYC general meeting of February this year (please ignore the Halloween decorations, they give us a spooky vibe and we didn't just totally forget to take them down):</p>
        <img src="@/assets/pause_general.jpg" alt="PauseAI February 2026 general meeting" style="width: 100%; border-radius: 8px;"/>
        <p>But we also do other things, like canvassing and interviewing people in parks across the city! Here is a pic from an interview shoot we did in the winter:</p>
        <img src="@/assets/interview_feb.jpg" alt="street interview" style="width: 100%; border-radius: 8px;"/>
        <p>If you're interested in getting acquainted with our group, you should absolutely pull up to one of our <a href="https://luma.com/calendar/cal-uAkC2RDfO1aWULR" target="_blank">events</a>!</p>
      </div>
    </div>
    <div class="section" id="fun-photos">
      <div class="section-heading">Additional fun photos!</div>
      <div class="section-content">
        <p>Here are some amazin' photos of us eating pizza. We just do this sometimes for fun or if we're hungry. Not an official club event, but we live in New York and pizza is our #1 food group:</p>
        <img src="@/assets/pizza2.jpg" alt="members of RAD Collective eating pizza" style="width: 100%; border-radius: 8px;"/>
        <img src="@/assets/pizza1.jpg" alt="members of RAD Collective eating pizza again" style="width: 100%; border-radius: 8px;"/>
        <p>Finally, I will leave you with the most beautiful creature that I know, the cat named Sunny <3<3<3</p>
        <img src="@/assets/sunny.jpg" alt="Ian's beautiful creature" style="width: 100%; border-radius: 8px;"/>
        <!-- TODO: Write the About Us content for RAD Collective.
             who we are, our mission, how people can get involved,
             and what makes our group unique. Use <p> tags for paragraphs. -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#about {
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

@media (max-width: 768px) {
  .section {
    .section-heading {
      font-size: 18px;
    }
  }
}
</style>
