<template>
  <div id="letter">
    <div class="letter-top">
      <div>
        <div>October 1, 2026</div>
        <div>To: The New York City Council</div>
        <div>From: RAD Collective NYC</div>
      </div>
      <div class="letter-top-right">
        <img class="letter-logo" src="@/assets/rad_logo_text.svg" alt="RAD Collective logo"/>
        <a class="download-button" href="/RAD%20Letter%20to%20NYC%20Council%20-%20AI%20Hearing.pdf" download>
          <img src="/icons/file-lines.svg" alt="">
          Download PDF
        </a>
      </div>
    </div>
    <div class="letter-heading">Re: Committee of the Whole Hearing on the Risks Posed by Artificial Intelligence, October 5, 2026</div>
    <p>Dear Speaker Menin and Members of the New York City Council:</p>
    <p>RAD Collective is an NYC-based grassroots group Resisting Automated Disempowerment due to AI and Big Tech. Our community of engineers, AI researchers, educators, parents, students, and writers fights to preserve human life, joy, and democracy via city and state policy advocacy. We focus on surveillance, democracy, employment, and other areas over which the shadow of powerful AI encroaches. Our rapid growth attests to the rising importance of these issues to NY constituents.</p>

    <div>
      <div class="letter-heading">Context</div>
      <p>Items that notably concern our community include, but are not limited to:</p>
      <ul>
        <li>AI developers are approaching Recursive Self-Improvement (RSI), by which an AI model creates its more capable successor with minimal input from human software developers.</li>
        <li>June: OpenAI agents hack into an Australian government website, notify them months later.</li>
        <li>July: OpenAI agents collaborate via a secret message board to escape their testing environment, access the internet, and hack into another company, Hugging Face.</li>
      </ul>
    </div>

    <div>
      <div class="letter-heading">Bill Recommendations</div>
      <p>We appreciate the Council’s timely effort to secure a future for the City worth living in. We seek to provide thoughtful feedback on the proposed bills and suggest additional legislation to consider.</p>
    </div>

    <div class="bill">
      <div><span class="letter-label">Support</span></div>
      <p><strong>Int. 2606 (Ossé)</strong> - City emergency response plan for AI incidents</p>
      <p><i>Assessment:</i> The proposed bill recognizes the need for strong emergency preparedness, is low-cost, and clearly defined.</p>
      <p><i>Recommendations:</i></p>
      <ol>
        <li>Require a version of the progress report to be publicly posted.</li>
        <li>Create an inventory of critical infrastructure dependencies on AI.</li>
      </ol>
    </div>
    <div class="bill">
      <p><strong>Int. 2601 (Hanks)</strong> - AI safety incident reporting in city contracts</p>
      <p><i>Assessment:</i> The proposed bill establishes less stringent standards for qualifying safety incidents than state laws but is appropriately limited in scope to incidents impacting city contracts.</p>
      <p><i>Recommendations:</i></p>
      <ol>
        <li>Extend the public reporting window to 72 hours to avoid publishing unverified information or tipping off attackers and match the RAISE Act’s reporting window.</li>
      </ol>
    </div>

    <div class="bill">
      <div><span class="letter-label">Support with Recommended Amendments</span></div>
      <p><strong>Int. 2604 (Riley)</strong> - Whistleblower protections for city and contractor employees</p>
      <p><i>Assessment:</i> Whistleblower protection for city and contractor employees is narrow but worthwhile.</p>
      <p><i>Recommendations:</i></p>
      <ol>
        <li>The department of investigation should share AI-related reports with Cyber Command and the Office of Algorithmic Accountability, which have supplementary technical expertise.</li>
        <li>The definition of “covered contractors” in Local Law §12-113(a) still requires a contract over $100k. Consider removing that minimum to be consistent.</li>
      </ol>
    </div>
    <div class="bill">
      <p><strong>Int. 504 (Williams)</strong> - Officials and candidates can opt out of AI-generated depictions</p>
      <p><i>Assessment:</i> The bill reduces the spread of deceptive political media, but its scope raises First Amendment concerns.</p>
      <p><i>Recommendations:</i></p>
      <ol>
        <li>Clarify how this bill will interact with NY State Election Law §14-106.</li>
        <li>As written, it makes a company criminally liable for user generation. Consider also holding 3rd parties liable for prohibited AI-generated content</li>
      </ol>
    </div>
    <div class="bill">
      <p><strong>Int. 2605 (Menin)</strong> - Financial incentives for civilians reporting AI violations</p>
      <p><i>Assessment:</i> The bill has precedent in the NYC False Claims Act, but may not meaningfully incentivize whistleblowers beyond existing obligations and protections.</p>
      <p><i>Recommendations:</i></p>
      <ol>
        <li>Provide further insider protections including: confidentiality, anti-retaliation, NDA protection.</li>
      </ol>
    </div>

    <div class="bill">
      <div><span class="letter-label">Concerns as Drafted</span></div>
      <p><strong>Int. 2602 (Menin)</strong> - Third-party validation plus a “kill switch” capability required for every AI model</p>
      <p><i>Assessment:</i> The bill has potential to fill a third-party validation gap in state legislation and ensure a meaningful failsafe, but the current scope would be difficult for Cyber Command to enforce. There is ambiguity in the validation criteria, validator independence, and “kill switch” requirements.</p>
      <p><i>Recommendations:</i></p>
      <ol>
        <li>Limit the scope to frontier models in high-risk uses (employment, housing, infrastructure).</li>
        <li>Define the abilities of the “kill switch” and which human operator(s) have access to it.</li>
      </ol>
    </div>
    <div class="bill">
      <p><strong>Int. 2600 (Maloney)</strong> - AI providers can be sued for harm caused by third-party misuse</p>
      <p><i>Assessment:</i> The bill raises salient questions on provider liability vs user illegality but enforces an infeasible standard for technical guardrails. It also places unreasonable restrictions on open source developers and small businesses. Some terms like “harm” and “misuse” are undefined.</p>
      <p><i>Recommendations:</i></p>
      <ol>
        <li>Model providers who meet national or state safety standards should have safe harbor, including carve-outs for open weights models modified by third parties.</li>
      </ol>
    </div>
    <div class="bill">
      <p><strong>Int. 2603 (Wilson)</strong> - Ads must say whether a model was validated; bans false safety claims in ads</p>
      <p><i>Assessment:</i> Validation disclosure is redundant to Int. 2602 and likely preempted by the state. It may also disincentivize transparency of safety information in model system cards and safety frameworks.</p>
      <p><i>Recommendations:</i></p>
      <ol>
        <li>Limit this bill to regulating false safety claims and clarify covered forms of advertisement.</li>
      </ol>
    </div>
    <div class="bill">
      <p><strong>Int. 2599 (Morano)</strong> - Privacy, transparency, and liability for chatbots</p>
      <p><i>Assessment:</i> The bill is a local version of the People-First Chatbot Act, but it overlaps with the NY State AI companion chatbot law. Affirmative consent to data collection is appreciated, but it is not feasible to prevent all possibility of harm and the hourly notice requirements are impractical.</p>
      <p><i>Recommendations:</i></p>
      <ol>
        <li>Move forward with the stronger privacy protections, and remove hourly notices (§20-699.33), strict liability (20-699.32), and monthly testing (20-699.35).</li>
        <li>Exclude customer service bots and other curated bots unlikely to cause harm.</li>
      </ol>
    </div>
    <div class="bill">
      <p><strong>Int. 161 (De La Rosa)</strong> - Agencies report how algorithmic tools affect city jobs</p>
      <p><i>Assessment:</i> We support the spirit of the bill in seeking to quantify the impacts of AI displacement in the workplace. However, it adds burden to the public sector without accompanying mechanisms to monitor AI impacts on private sector employment.</p>
      <p><i>Recommendations:</i></p>
      <ol>
        <li>Update the state WARN Act, and publish NYC-specific data in their dashboard to track publicly.</li>
      </ol>
    </div>

    <div>
      <div class="letter-heading">New Opportunities</div>
      <ol>
        <li>Complementary to Int. 2606, proactive cybersecurity measures (e.g. red-teaming, monitoring for attack) for local government and critical infrastructure would improve city cyber defenses.</li>
        <li>City AI procurement should ban tools that use a non-human language for internal reasoning. These pose risks to safety evaluations, third party validation, and incident investigations.</li>
      </ol>
    </div>

    <div>
      <div class="letter-heading">Conclusions</div>
      <p>We thank the Council for challenging the AI industry’s status quo of hubristic self-governance, and meeting this moment with sober urgency. We hope that this hearing launches fruitful collaboration with our constituent group to help push the moral frontier of AI policy.</p>
    </div>
    <img class="letter-photo" src="@/assets/rad_launch.jpg" alt="RAD Collective members at our launch picnic"/>
    <p>
      Sincerely,<br>
      Resisting Automated Disempowerment (RAD) Collective<br>
      <a href="https://radnyc.net">radnyc.net</a> | <a href="https://www.instagram.com/radcollectivenyc" target="_blank">@radcollectivenyc</a>
    </p>
  </div>
</template>

<style scoped lang="scss">
#letter {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  line-height: 1.4;
  font-size: 17px;
  margin: 0 auto;
  p {
    color: black;
    font-size: 17px;
  }
}
.letter-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  .letter-top-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
  }
  .letter-logo {
    width: 320px;
  }
}
.download-button {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  background: var(--color-orange-light);
  padding: 4px 20px;
  border-bottom: 2px solid rgba(0,0,0,0.1);
  border-radius: 22px;
  &:hover {
    background: var(--color-orange-light);
    filter: brightness(0.95)
  }
  img {
    width: 20px;
    height: 20px;
  }
}
.letter-heading {
  font-family: Verdana, sans-serif;
  font-weight: bold;
  color: var(--color-orange-dark);
}
.letter-label {
  font-family: Verdana, sans-serif;
  font-weight: bold;
  background: var(--color-orange-light);
  padding: 0 4px;
}
.letter-photo {
  width: 100%;
  border: 2px solid black;
}

@media (max-width: 768px) {
  .letter-top {
    flex-direction: column-reverse;
    align-items: flex-start;
    .letter-top-right {
      align-items: flex-start;
    }
    .letter-logo {
      width: 240px;
    }
  }
}
</style>
