<template>
  <div id="testimony">
    <div class="section" id="testimony">
      <div class="section-heading">New York City Council Testimony 10/16/2026</div>
      <div class="doodle-box">
        <p>On October 5, 2026, the New York City Council convened a rare Committee of the Whole hearing on AI. Whistleblowers, industry representatives, city agencies, RAD co-lead Bryce Rogers, and many others testified at this 11-hour-long hearing. Video and transcript of Bryce's testimony <RouterLink to='/policy/2026-10-05-testimony'>here</RouterLink>!</p>
        <p>On October 16, 2026, the New York City Council convened again to hear additional testimony from spaceXAI and others, including RAD leads Bryce Rogers and Megan Lagerquist. The Video and transcripts of Bryce and Meghan's testimonies are below.</p>
        <p>See our letter to the council <RouterLink to="/policy/letter-to-city-council">here</RouterLink>!</p>
        <p>Council Member and Committee on on Technology Chair De La Rosa (left) and Bryce and Megan (Right):</p>
        <div class="side-by-side">
          <img src="@/assets/2026-10-16-chair-de-la-rosa.png" alt="Chair De La Rosa" />
          <img src="@/assets/2026-10-16-bryce-and-megan-testimony.png" alt="Bryce :D" />
        </div>
      </div>
    </div>

    <div class="section" id="watch">
      <div class="section-heading">Watch</div>
      <iframe class="embedded-video" src="https://www.youtube.com/embed/I7rWKCNtVic?si=vg7kMhf7wpkGWy5s&amp;start=7110" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    </div>

    <div class="section" id="transcript">
      <div class="section-heading">Transcript</div>
      <div class="section-content">
        <p><strong>Testimony of Bryce Rogers<br>
          RAD Collective, Co-lead<br>
          Before the Committee of the Whole, New York City Council<br>
          Hearing on AI – October 16, 2026
        </strong></p>

        <p>My name is Bryce Rogers. I’m co-lead of the Resisting Automated Disempowerment Collective, or RAD Collective, a grassroots New York City community advocating for city and state policy that protects human life, joy, and democracy as AI and Big Tech grow more powerful.</p>
        <p>We thank the Council for reconvening today to finish the job they started last Monday. (humorous tone)</p>
        <p>RAD wrote a letter to the Council with feedback on all 10 Introductions, but today my colleague Megan and I want to share more granular recommendations on two Introductions in particular: Council Member Morano’s chat bot privacy, and Speaker Menin’s third party validation.</p>
        <p>But first, I’ll straightforwardly share two strategic postures RAD assumes in sharing these recommendations.</p>
        <ol>
          <li><p>Our goal is for AI tools served to New Yorkers to be safe and to slow the rate of advancement of frontier AI, given the recklessness and rapid power concentration we’re seeing.</p></li>
          <li><p>Our angle, with our recommendations today, is for this legislation to pass and for companies to comply with it (as opposed to something like signalling, or intentionally extreme compliance burdens to trigger a legal battle)</p></li>
        </ol>
        <p>I speak today about the issue of affirmative consent for uses of the data gathered through user interactions with AI. The chatbot privacy bill introduced by Councilmember Morano is a good start towards protecting consumers from unknowingly exposing their personal data to privacy risks, profiling, and advertising.</p>
        <p>Many users share deeply personal information with rich context when using AI products. Anthropic, OpenAI, Google, Meta, Amazon, Microsoft, and SpaceXAI by default collect user chat data and train their models on it. </p>
        <p>Some of these companies, like Meta and OpenAI, use personal data for targeted advertising, and Google, Meta, Amazon, and Microsoft combine this data with other information they’ve collected across their platforms to build a more complete profile. This is invasive.</p>
        <p>Others, like Anthropic, insist they won’t sell user data. But as long as this is a voluntary policy, they can walk it back anytime they need the revenue boost. When Anthropic initially launched Claude, they did not train models on user data and automatically deleted it after 30 days. In September 2025, they rolled this back to an opt-out regime.</p>
        <p>We recommend paring down Morano’s bill to focus on the core requirements of affirmative consent for data collection, storage, uses, and sale. It should also be expanded to cover data collected by agentic AI, not just chatbots. This ensures the strongest version of the most impactful consumer protections can move forward into law as soon as possible. Thank you, and I look forward to you hearing from my colleague Megan. </p>

        <br>
        <p><strong>Testimony of Megan Lagerquist<br>
          RAD Collective, Policy Co-lead<br>
          Before the Committee of the Whole, New York City Council<br>
          Hearing on AI – October 16, 2026
        </strong></p>

        <p>My name is Megan Lagerquist and I thank the council for the opportunity to testify today. The second policy we want to address regards third-party audits, which Speaker Menin has proposed via Int 1100. RAD supports independent evaluations of high risk frontier models, defined similarly as in the RAISE Act. </p>
        <p>Currently, many AI companies voluntarily work with third parties to run safety evaluations. However, the voluntary nature of this collaboration means companies control access and can move forward with development or deployment regardless of the third party’s findings. METR and Redwood researchers who investigated the OpenAI hack of Hugging Face could not directly query the main model involved and were limited to a window of activity OpenAI chose.</p>
        <p>To ensure that these products are safe for consumers, we must require independent verification that these models are sufficiently aligned with human instruction, do not engage in social engineering or manipulation, and have adequate safeguards and monitoring in place. We cannot rely on self-published model cards or even whistleblowers for full transparency. As companies race towards recursive self improvement – models that can autonomously develop the next generation of more powerful models with little human input – I am extremely concerned that market pressures push even safety-minded individuals to take inexcusable risks. Not even the engineers within the AI companies fully grasp the product they’re creating or the race they accelerate.</p>
        <p>Evaluators need to be granted access to all documents and models necessary to conduct their analysis. They need to be able to run their own experiments on the models, and that means more than just accessing chain-of-thought logs – though human-readable chain-of-thought is a critical feature to preserve. It means access to the model weights and internal activations that are necessary for truly effective alignment auditing. And if they say that the models do not meet New York’s legal thresholds for safety (which should be created), those models should not be allowed to be sold to New Yorkers.</p>
        <p>To effectively facilitate and enforce this regulation, the city needs to invest in expanding the capacity of the Office of Technology and Innovation or a new agency. As we heard from OTI’s testimony on October 5th, OTI and Cyber Command do not have experience regulating industry. There are independent AI safety research organizations that could grow into the needed evaluator ecosystem, but the council needs to build the legal support system to certify and empower them.</p>
        <p>We think the best way forward to enact this legislation is to focus on third party validation of capabilities and behaviors that could impede human control or lead to costly errors in high-stakes settings, and narrowing the focus to high risk models rather than trying to regulate every customer service chatbot and machine learning application. There are many valid concerns about AI models beyond what I’ve mentioned in this testimony, such as bias, filtering out harmful content, and misuse through jailbreaking. We share these concerns and hope that these will be addressed by additional legislation or litigated under existing laws. For the current bill, we also suggest separating out the kill switch requirements from the third party audits for simplicity.</p>
        <p>We hear from AI companies that they want regulation and that they care about safety. I expect that, if we pursue this law seriously, they are going to complain that they cannot possibly give full access to auditors because it would expose their IP. This has not stopped us from auditing other industries.</p>
        <p>I expect they will say that this is the federal government’s responsibility, not the city’s. The federal government is content with voluntary commitments and no verification. I believe that this Council is not content, and I urge you to move forward with strong public oversight of the AI industry, and to do so with urgency. We do not have years to wait for offices to be created and funded and staffed.</p>

        <img src="@/assets/2026-10-05-city-hall.jpg" alt="RAD takes City Hall >:)"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

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
.embedded-video {
  width: 90%;
  aspect-ratio: 16/9;
  margin: auto;
}
.side-by-side{
  display: flex;
  flex-direction: row;
  img {
    width: 48%
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
