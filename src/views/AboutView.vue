<template>
  <div id="about">
    <div class="section" id="about-us">
      <div class="section-heading">About Us</div>
      <div class="section-content">
        <p>Welcome to our site! We are so excited for you to be here, and we have so much to tell you about!</p>
        <p>RAD Collective officially launched in July 2026. Before constructing a new group vision and starting RAD, many of our members led and volunteered their efforts for the now-defunct PauseAI NYC, a local group of PauseAI US.</p>
        <p>So who are we? We are NYC residents and folks from the surrounding area who all share a concern about AI safety, and <u>are willing to do something about it</u>. Our leaders and members come from a variety of backgrounds including (but not limited to) software engineering, web development, political organizing, AI research, art, film, and more! There is no prerequisite to join!</p>
        <p>Our group is growing quickly, and we would love to have you join us if you're in the area.</p>
      </div>
    </div>
    <div class="section" id="what-we-do">
      <div class="section-heading">What We Do</div>
      <div class="section-content">
        <p>We discuss and advocate for AI safety at multiple levels. We have group discussions at our general meetings, call our representatives, and canvas/table on the streets of NYC! We advocate for a global treaty on AI development, along with domestic state and federal-level legislation that promotes safety in the AI industry.</p>
        <p>
          We got a win at the NY state level last year with the passage of the <a href="https://www.nysenate.gov/legislation/bills/2025/A6453/amendment/A" target="_blank">RAISE Act</a>, sponsored by <a href="https://www.nytimes.com/2025/10/20/nyregion/alex-bores-ny-congress-primary.html">former congressional candidate Alex Bores</a>. This bill, while weaker than we would have hoped, serves as a huge milestone for AI regulation in the USA, being only the second bill of its kind nationwide (the other one being the <a href="https://legiscan.com/CA/text/SB53/id/3041703" target="_blank">California bill SB 53</a>). Our NYC group made hundreds of phone calls to the governor's office to move the needle and make that possible. If you want to make <i>real</i> change on this issue, we are the group to join.
        </p>
        <p>And in even more recent news, NY Governor Hochul has <a href="https://www.governor.ny.gov/executive-order/no-62-establishing-temporary-moratorium-data-centers-new-york-while-state-develops" target="_blank">signed an executive order</a> to halt the construction of "hyperscale" (over 50 megawatts of energy consumption per day) data centers for one year. This will give the NY government some time to study the impacts of existing data centers and develop a better regulatory framework. While we were not directly involved in driving this executive order, some of our members have attended and spoken out at town council meetings to help oppose individual data center projects. The data center issue has really been heating up, and it's more important than ever for people to organize against the build-up of this harmful infrastructure.</p>
        <p>OK... now for the fun stuff.</p>
        <p>We meet in real life!! It's always a good time. Here is a photo from our soft launch picnic on July 11, 2026:</p>
        <img src="@/assets/rad_launch.jpg" alt="RAD Collective soft launch picnic" style="width: 100%; border-radius: 8px;"/>
        <p>Also, as mentioned at the top of the page, many of us have been active even before forming RAD. Here is a photo from the PauseAI NYC general meeting of April this year:</p>
        <img src="@/assets/pause_general_apr.jpg" alt="PauseAI April 2026 general meeting at Collider" style="width: 100%; border-radius: 8px;"/>
        <p>And we do other things too, like canvassing and interviewing people in parks across the city! Here is a pic from an interview shoot we did all the way back in winter:</p>
        <img src="@/assets/interview_feb.jpg" alt="street interview" style="width: 100%; border-radius: 8px;"/>
        <p>If you're interested in getting acquainted with our group, you should absolutely pull up to one of our <a href="https://luma.com/calendar/manage/cal-sw8QA8WDE2Uz9J4" target="_blank">events</a>!</p>
      </div>
    </div>
    <div class="section" id="fun-photos">
      <div class="section-heading">Additional fun photos!</div>
      <div class="section-content">
        <p>Here are some amazin' photos of us eating pizza. Not an official club event, but we live in New York and pizza is our #1 food group:</p>
        <img src="@/assets/pizza2.jpg" alt="members of RAD Collective eating pizza" style="width: 100%; border-radius: 8px;"/>
        <img src="@/assets/pizza1.jpg" alt="members of RAD Collective eating pizza again" style="width: 100%; border-radius: 8px;"/>
        <p><strong>Editorial note:</strong> Cameron thinks/knows that New Jersey pizza is better than New York pizza. This is not an official opinion of the group, but he will not be silenced. Please reach out if you want NJ pizza recs.</p>
        <p>Finally, we will leave you with this beautiful creature, Sunny the cat <3<3<3</p>
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
