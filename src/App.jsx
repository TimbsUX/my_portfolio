import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
<div className="wrap">
<nav><strong>Oluwadamilare Samuel Oni</strong><div><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div></nav>
<header className="hero">
<div className="eyebrow">Product Designer · UX/UI · Information Architecture</div>
<h1>Designing clear, structured digital experiences.</h1>
<p className="lead">I design interfaces and workflows that make complex information easier to understand and everyday tasks easier to complete. My work explores role-based platforms, mobile commerce and technical dashboards through UX strategy, information architecture, interaction design, prototyping and visual systems.</p>
<div><span className="pill">Product Design</span><span className="pill">UX Strategy</span><span className="pill">Information Architecture</span><span className="pill">UI Design</span><span className="pill">Design Systems</span></div>
</header>

<section id="work">
<div className="eyebrow">Selected work</div>
<h2>Three projects, three kinds of complexity.</h2>
<div className="grid">
<div className="card"><h3>Siwes Connect</h3><p>Ongoing role-based UX for a multi-stakeholder SIWES workflow.</p><span className="pill">Ongoing</span></div>
<div className="card"><h3>Grubbers</h3><p>Mobile food discovery and group-ordering product prototype.</p><span className="pill">Prototype</span></div>
<div className="card"><h3>Aegis</h3><p>Personal concept for a more legible security-event experience.</p><span className="pill">Concept</span></div>
</div>
</section>

<section id="siwes">
<div className="eyebrow">01 - Siwes Connect</div><h2>Role-based UX for a multi-stakeholder SIWES workflow.</h2>
<div className="project-layout"><div className="project-copy">
<div className="meta"><div className="card"><b>Status</b><br />Ongoing</div><div className="card"><b>Role</b><br />Product Designer</div><div className="card"><b>Focus</b><br />UX specification · role-based flows · dashboard concepts</div></div>
<div className="copy">
<p>SIWES activities involve multiple participants who need to access, submit, review and track student logbook information. The design challenge was to give each role a clear workflow and appropriate access without making every dashboard identical.</p>
<p>I worked on the product's UX specification, role-based flows and dashboard interface concepts. I personally designed the authentication flow and dashboard concepts for platform admin, SIWES coordinator, school supervisor and industry supervisor roles.</p>
</div>
<h3>Student dashboard</h3>
<p>The dashboard brings progress, pending work, deadlines, activity states and stakeholder messages into one student-facing workspace. The Activity Feed demonstrates a structured vocabulary for Approved, Draft, Revision needed and Pending states.</p>
<ul>
<li>Prioritize the next action with deadline + Submit Logbook.</li>
<li>Expose workflow state rather than only displaying content.</li>
<li>Keep stakeholder communication contextual.</li>
</ul>
<p className="note">Validation boundary: online interviews were conducted, but confirmed interview findings are not included. Usability testing with SIWES students or supervisors has not yet been conducted. The visible numbers and messages are prototype content.</p>
</div><img className="project-img" src="/aegis-security-dashboard.png" alt="Siwes Connect student dashboard concept" /></div>
</section>

<section id="grubbers">
<div className="eyebrow">02 - Grubbers</div><h2>A mobile food-discovery and group-ordering product concept.</h2>
<div className="project-layout"><div className="project-copy">
<div className="meta"><div className="card"><b>Status</b><br />Prototype</div><div className="card"><b>Role</b><br />Lead Product Designer</div><div className="card"><b>Platform</b><br />iOS & Android</div></div>
<div className="copy">
<p>Grubbers is designed around food-discovery and ordering friction areas including group-order coordination, dietary uncertainty and ETA communication. The concept combines consumer ordering with a B2B2C expense-receipt layer for team coordinators.</p>
<p>I led UX strategy, information architecture, user-flow mapping, design-system definition, high-fidelity UI design and accessibility considerations across the MVP design.</p>
</div>
<h3>Dietary preference onboarding</h3>
<p>The onboarding experience asks users to define dietary preferences before food discovery, then makes the resulting selection visible and actionable.</p>
<ul>
<li>Selected states make active restrictions easy to scan.</li>
<li>A live summary explains the consequence of the selection.</li>
<li>Icon + text + selected styling avoids depending on colour alone.</li>
<li>Save preferences &amp; continue closes the task while Set up later provides an alternative path.</li>
</ul>
<h3>Key product decisions</h3>
<ul>
<li>Vibrant yellow as the primary visual accent.</li>
<li>Persistent ambient Group Cart as a coordination hypothesis.</li>
<li>Range-based ETA presentation such as 28–34 min.</li>
<li>Prominent Split Receipt for the B2B2C expense use case.</li>
<li>WCAG 2.1 AA treated as a design constraint.</li>
</ul>
<p className="note">No usability-test result, conversion improvement, retention improvement or trust metric is claimed. The checkout flow has not yet been usability tested.</p>
</div><img className="project-img grubbers-img" src="/portfolio-image-1.png" alt="Grubbers dietary preference onboarding screen" /></div>
</section>

<section id="aegis">
<div className="eyebrow">03 - Aegis</div><h2>A personal concept for a more legible security-event experience.</h2>
<div className="project-layout"><div className="project-copy">
<div className="meta"><div className="card"><b>Status</b><br />Personal concept</div><div className="card"><b>Role</b><br />Senior Product Designer · UI/UX Architect</div><div className="card"><b>Scope</b><br />End-to-end desktop design</div></div>
<div className="copy">
<p>Aegis explores how a security interface might communicate technical evidence without forcing users to interpret cryptic alerts and raw system activity.</p>
<p>The concept uses a “glass box” approach: show what the system is doing in plain language while retaining technical evidence. Its visual language is deliberately calm, with amber for warnings and red reserved for imminent destructive actions.</p>
</div>
<h3>Scan State</h3>
<p>The first state combines progress, current status, structured telemetry and a live technical log. The Scan → Threat → Clear lifecycle establishes a clear security-event sequence.</p>
<ul>
<li>High-level progress is separated from detailed activity.</li>
<li>Telemetry is structured into discrete cards.</li>
<li>Technical logs remain available without becoming the only source of meaning.</li>
<li>“Simulate: Threat Detected” explicitly demonstrates a prototype transition.</li>
</ul>
<h3>Interaction architecture</h3>
<ul>
<li><b>Scan:</b> understandable system activity while a scan runs.</li>
<li><b>Decision:</b> contextual threat card + machine proof + hold-to-confirm quarantine.</li>
<li><b>Success:</b> Deep Clean Receipt and clear completion state.</li>
</ul>
<p className="note">Aegis is a personal concept. The displayed telemetry values are prototype content. No real scan-performance, detection-accuracy or time-saving metric is claimed.</p>
</div><img className="project-img" src="/portfolio-image-2.png" alt="Aegis security dashboard scan state" /></div>
</section>

<section id="about">
<div className="eyebrow">About</div><h2>Designing where structure matters.</h2>
<div className="copy">
<p>I'm a Product Designer working across UX strategy, interface design and information architecture. I enjoy problems where the interface has to make structure visible-whether that means separating workflows by role, making a mobile commerce journey easier to navigate, or translating technical system activity into understandable decisions.</p>
<h3>Core capabilities</h3>
<ul>
<li>Product design &amp; UX strategy</li><li>User flows, journey mapping &amp; problem framing</li>
<li>Information architecture &amp; role-based navigation</li><li>Research planning, interviews &amp; heuristic evaluation</li>
<li>Interaction design &amp; high-fidelity prototyping</li><li>Design systems, responsive UI &amp; accessibility</li>
<li>Dashboard, data-table &amp; complex-state design</li><li>Technical UX and developer-aware handoff</li>
</ul>
</div>
</section>

<section id="contact">
<div className="eyebrow">Contact</div><h2>Let's work on a complex product problem.</h2>
<p className="lead">Oluwadamilare Samuel Oni · Lagos, Nigeria · <a href="mailto:milaresarena18@gmail.com">milaresarena18@gmail.com</a></p>
</section>
<footer><strong>Oluwadamilare Samuel Oni</strong><br /><span className="note">Product Designer · UX/UI · Information Architecture</span></footer>
</div>
    </>
  );
}
