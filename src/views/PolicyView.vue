<template>
  <div id="about">
    <div class="section" id="employment">
      <div class="section-heading">Why?</div>
      <div class="section-content">
        <p>In many other places on our site we've shared our personality and community vibes, but we think it would be a mistake to create this community around our shared concerns and worldview if we didn't do anything with it! If we want to have an impact (i.e. meaningfully change the world beyond our bubble, protect the people of our state/city, create a future worth living in, etc.), we must have a clear vision forward. So, some of us RAD folks put our policy nerd brains together to serve you this plan...</p>
      </div>
    </div>
    <div class="section" id="employment">
      <div class="section-heading">1. Employment: Prioritize Human Workers and Fortify the Safety Net</div>
      <div class="section-content">
        <p><strong>Worker Displacement Transparency:</strong> Expand New York WARN Act reporting requirements to capture AI-driven workforce displacement and mandate that employers notify employees of any AI use for employment-related decisions (e.g., CA Bill AB-1898). Additionally, the New York Department of Labor should create a public dashboard tracking shifts in employment and wages as an early warning system, modelled after the California AI-Unemployment Tracker.</p>
        <p><strong>Safety Net Solvency:</strong> Restructure the state unemployment insurance (UI) framework to guarantee the fiscal solvency of public safety nets and strengthen incentives for retaining human workers. NY should adopt mechanisms like separation charges targeting mass layoffs and corporate tax rate hikes contingent on widespread automation of human labor.</p>
      </div>
    </div>
    <div class="section" id="education">
      <div class="section-heading">2. Education: Human-Centered Education and Critical AI Literacy</div>
      <div class="section-content">
        <p><strong>Critical AI Literacy for All Ages:</strong> Fund a pilot program in NYC high schools that instructs students how to evaluate AI outputs critically, spot hallucinations, understand algorithmic bias, and protect their data privacy. Additionally, municipal funding should be allocated for agencies like NYC Aging to host targeted tech-literacy workshops that protect seniors from AI-driven scams, deepfakes, and predatory data collection.</p>
        <p><strong>Human-first Education:</strong> Student monitoring software and the use of minor data to train AI models should be strictly prohibited. NYC should codify Department of Education AI guidance to ensure human educators are supplemented by AI applications rather than replaced by them.</p>
      </div>
    </div>
    <div class="section" id="surveillance">
      <div class="section-heading">3. Surveillance: Protect Privacy and Reject Surveillance</div>
      <div class="section-content">
        <p><strong>Facial Recognition and Police Oversight:</strong> Institute strict oversight of government procurement of automated policing technologies. NYC should expand the POST Act to require City Council approval for new NYPD surveillance tools, impose strict bans on private Automated License Plate Reader (ALPR) networks like Flock, and prohibit local agencies from sharing data with federal immigration enforcement (ICE) without a warrant.</p>
        <p><strong>Workplace, Tenant, and Consumer Protections:</strong> Ban predatory workplace surveillance and data exploitation, including off-the-clock monitoring, keystroke tracking, and automated firing without human review. NYC should prohibit the use of tenant data for eviction screening, harassment, and algorithmic rent-setting (e.g., by expanding the Donnelly Act). Surveillance pricing should be banned in grocery stores and other businesses.</p>
      </div>
    </div>
    <div class="section" id="democracy">
      <div class="section-heading">4. Democracy: Secure Democratic Information and Infrastructure</div>
      <div class="section-content">
        <p><strong>AI-Generated Content Transparency:</strong> Mandate comprehensive labeling and detection of AI-generated political content by expanding New York Election Law § 14-106. NY should implement layered technological defenses such as C2PA provenance tracking and closed-provider watermarking to combat deepfakes.</p>
        <p><strong>Institutional Cybersecurity:</strong> Secure targeted state appropriations to protect the digital infrastructure of underfunded local election offices (similar to federal Help America Vote Act Election Security grants). NYC should enforce simple cyber hygiene standards such as Multi-Factor Authentication (MFA) to protect against AI-enabled threats.</p>
      </div>
    </div>
    <div class="section" id="data-centers">
      <div class="section-heading">5. Data Centers: Community-First AI Construction</div>
      <div class="section-content">
        <p><strong>Inclusionary Public Compute:</strong> Building on the Empire AI initiative and borrowing strategies from affordable housing policies, NY should mandate that new commercial data centers reserve a percentage of their computing capacity for state, local, and academic use. This must include secure data enclaves to process citizen data without exposing it to private corporate servers.</p>
        <p><strong>Community Benefit Agreements (CBAs):</strong> Require data center developers to directly fund local infrastructure improvements, such as municipal broadband, residential energy upgrades, and water stabilization through localized Community Benefit Agreements (CBAs) or earmarked property taxes. Furthermore, NY must reform Industrial Development Agency (IDA) tax exemptions to end blanket public subsidies for data centers (e.g., NY Bill S9182B - Stop Subsidizing Data Centers Act).</p>
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
