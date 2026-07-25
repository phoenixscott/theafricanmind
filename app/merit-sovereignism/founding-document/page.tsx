import Masthead from '@/components/Masthead'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Merit-Sovereignism: The Founding Document — The African Mind',
  description: 'The complete founding document of Merit-Sovereignism: a governance philosophy built from the observed realities of African failure.',
}

const Section = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '3.5rem' }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
      <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', whiteSpace: 'nowrap' }}>{number}</span>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.35rem', fontWeight: 700, color: 'var(--black)', lineHeight: 1.25, letterSpacing: '-0.01em' }}>{title}</h2>
    </div>
    {children}
  </div>
)

const Sub = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--black)', marginBottom: '0.7rem' }}>{title}</h3>
    {children}
  </div>
)

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1rem', lineHeight: 1.85, color: '#2a2a2a', marginBottom: '1.2rem' }}>{children}</p>
)

const Ul = ({ items }: { items: string[] }) => (
  <ul style={{ margin: '0.5rem 0 1.2rem 1.2rem', padding: 0 }}>
    {items.map((item, i) => (
      <li key={i} style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1rem', lineHeight: 1.8, color: '#2a2a2a', marginBottom: '0.4rem' }}>{item}</li>
    ))}
  </ul>
)

export default function FoundingDocumentPage() {
  return (
    <>
      <Masthead />

      {/* HERO */}
      <div style={{ background: 'var(--black)', padding: '5rem 2rem 4rem', color: 'var(--cream)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem' }}>
            The Founding Document
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--cream)', marginBottom: '1rem' }}>
            Merit-Sovereignism:<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>A Founding Political Philosophy</em>
          </h1>
          <span className="gold-line" style={{ width: '60px', display: 'block', margin: '1.5rem 0' }} />
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,240,232,0.65)', fontStyle: 'italic', maxWidth: '560px', marginBottom: '1.5rem' }}>
            A system of governance where sovereignty belongs to the collective, advancement belongs to merit, and power answers to the people.
          </p>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.7rem', color: 'rgba(245,240,232,0.4)', letterSpacing: '0.08em' }}>
            First Edition · 2026 · The African Mind · theafricanmind.com
          </p>
        </div>
      </div>

      {/* BACK LINK */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '2rem 2rem 0' }}>
        <Link href="/merit-sovereignism" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
          ← Back to Merit-Sovereignism
        </Link>
      </div>

      {/* BODY */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem 6rem' }}>

        {/* PREAMBLE */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Preamble</p>
          <P>Merit-Sovereignism is a political philosophy born from a clear-eyed observation: the great failures of governance share a common flaw. Communism ignored human nature and destroyed the incentive to contribute. Liberal democracy was captured by party machinery and private wealth. Authoritarianism replaced the rule of law with the rule of men. Hereditary oligarchy dressed inequality in the language of tradition.</P>
          <P>This document proposes a new system. One in which collective ownership guarantees the dignity of every citizen, merit determines the rewards of contribution, and democratic accountability ensures that no individual, not even a founding leader, stands above the law. It is not utopian. It is designed for the real world, for real human beings, and for nations willing to undergo the difficult work of transformation.</P>
          <P>This philosophy was developed with Nigeria in mind, a nation of extraordinary human talent held back by entrenched systems of corruption, inequality, and institutional failure. But its principles are universal. Any nation with the will and leadership to implement them can build a more just and progressive society.</P>
          <P>Merit-Sovereignism is also a response to a larger civilisational reality. Africa is 17% of humanity and produces less than 3% of global scientific output. This is not a natural state. It is a produced one, manufactured through governance failures, elite capture, and the deliberate suppression of human potential. A philosophy designed to unlock that potential is not merely a national project. It is a contribution to what humanity can become.</P>
        </div>

        <Section number="Part I" title="Core Philosophy">
          <Sub title="1.1 The Two Pillars">
            <P>Merit-Sovereignism rests on two foundational principles that must coexist:</P>
            <Ul items={[
              'Sovereignty belongs to the collective. The people, not the government, are the ultimate owners of all land, property, infrastructure, and national wealth.',
              'Advancement belongs to merit. Within the collective, individuals receive differentiated benefits based on the value of their verified contribution to society.',
            ]} />
            <P>These two pillars resolve the central failure of communism: the incentive problem. Pure communism assumed people would contribute equally out of collective spirit. Human nature does not work this way. Merit-Sovereignism preserves the dignity guarantee of communal ownership while introducing a structured incentive system that rewards contribution without creating inheritable dynasties of wealth.</P>
          </Sub>
          <Sub title="1.2 What Merit-Sovereignism Is Not">
            <Ul items={[
              'It is not communism. Citizens are not equal in benefit; they are equal in dignity and in access to basic needs.',
              'It is not capitalism. There is no private ownership of land, housing, or essential infrastructure, and no inherited wealth.',
              'It is not a technocracy. Technical experts do not govern; elected representatives govern, subject to the rule of law.',
              'It is not authoritarianism. No transitional period or emergency justifies unchecked executive power. Constitutional limits are absolute.',
            ]} />
          </Sub>
          <Sub title="1.3 The Equality of Dignity">
            <P>Every citizen is guaranteed, unconditionally and for life: a home, food, healthcare, medicine, primary and secondary education, and basic transport. These are not privileges. They are rights that belong to every person by virtue of their citizenship, regardless of occupation or contribution tier. A cleaner&apos;s children sleep in a warm house, eat well, and attend the same quality of school as an engineer&apos;s children. This is the floor. It does not move.</P>
          </Sub>
        </Section>

        <Section number="Part II" title="Governance Structure">
          <Sub title="2.1 Elected Government">
            <P>The government of a Merit-Sovereignist state consists of elected representatives at every level: national, regional, and local. No position of authority may be filled by appointment alone. Every official who holds decision-making power over public affairs must be chosen by the people through open, verifiable elections.</P>
            <Ul items={[
              'A President or Head of State, elected by popular vote.',
              'A legislative body equivalent to a House of Representatives or Parliament, fully elected.',
              'A Constitutional Court, nominated by the legal profession\'s independent expert panel, confirmed by a supermajority of the legislature, serving fixed non-renewable terms. No judge may be reappointed. No executive may remove a judge. Only a legislative supermajority may remove a judge, and only for documented misconduct.',
              'Departmental heads covering Education, Health, Infrastructure, and other portfolios are elected or confirmed by the legislature, not appointed unilaterally by the President.',
            ]} />
            <P>A foundational principle of governance structure is that no single body controls all appointments. Each oversight arm of the state has a deliberately different appointment mechanism, so that capturing one institution does not grant control over all of them. This distribution of appointment power is itself a constitutional guarantee.</P>
          </Sub>
          <Sub title="2.2 No Political Parties">
            <P>Political parties are illegal under Merit-Sovereignism. This is a foundational rule, not a preference. The history of party systems demonstrates that parties create loyalty to the party above loyalty to the people. Party machinery is how corruption organises itself at scale. Every candidate for public office runs as an individual, on their record, their competence, and their stated platform.</P>
            <P>To stand for public office, every candidate must satisfy all of the following requirements:</P>
            <Ul items={[
              'A clean criminal and corruption record, verified by the independent anti-corruption body.',
              'Full public declaration of all personal assets and wealth before candidacy is confirmed.',
              'A minimum number of verified citizen nominations from their constituency.',
              'A civic knowledge examination covering constitutional law, governance principles, public administration, and economic fundamentals, administered by the independently elected Civic Examination Body.',
              'Mandatory appearance at four nationally televised public debates, open to all citizens. Failure to appear disqualifies a candidate.',
            ]} />
            <P>Campaign financing is publicly administered. No individual, corporation, or organisation may privately fund a political campaign. Each qualifying candidate receives equal public funding. This removes the financial capture of candidates before they even take office.</P>
          </Sub>
          <Sub title="2.3 Rule of Law and Anti-Corruption">
            <P>The law applies equally to all persons, including the Head of State. Key enforcement mechanisms include:</P>
            <Ul items={[
              'Any elected official found guilty of corruption is immediately removed from office and tried under the same criminal law as any citizen.',
              'An independent Anti-Corruption Body, whose members are elected directly by citizens on a completely separate ballot from all other elections. No other body nominates, confirms, or removes them. This body holds prosecutorial powers that cannot be overridden by the executive, the legislature, or any other institution.',
              'All government decisions, contracts, and expenditures above a defined threshold are public record, accessible to every citizen in real time.',
              'Whistleblower protections are constitutionally guaranteed and cannot be removed by any legislation.',
            ]} />
          </Sub>
          <Sub title="2.4 The Judiciary">
            <P>Judges are selected based on verified legal expertise and track record through the expert panel nomination process. They serve fixed, non-renewable terms. A judge who cannot be reappointed has no incentive to please any appointing power. The judiciary is fully independent of the executive and may not be directed, pressured, or threatened by any official.</P>
          </Sub>
        </Section>

        <Section number="Part III" title="Economic Model">
          <Sub title="3.1 Collective Ownership">
            <P>All land, housing, infrastructure, and natural resources belong to the collective, the people of the nation as a whole. The government acts as custodian of these assets on behalf of the people; it does not own them. No individual may purchase land outright or sell it as private property. Housing is allocated to citizens and used for life, but it cannot be sold on an open market.</P>
          </Sub>
          <Sub title="3.2 The Credits System">
            <P>Physical currency is phased out domestically and replaced by a Credits system. Credits function similarly to money in practical terms but with fundamental structural differences: they are state-held, non-transferable between individuals, non-inheritable, and tied permanently to a citizen&apos;s identity and contribution tier.</P>
            <P>Key properties:</P>
            <Ul items={[
              'Every citizen receives a baseline credit allocation sufficient to cover all guaranteed basic needs, regardless of occupation or tier.',
              'Higher-tier workers receive larger credit allocations that unlock additional lifestyle benefits.',
              'Credits expire upon death and do not transfer to heirs, except under specific inheritance provisions defined in Part V.',
              'Credits cannot be accumulated beyond defined caps, preventing de facto wealth inequality from re-emerging within the system.',
              'All credit issuance, balances, and transactions are recorded on a public decentralised ledger accessible to every citizen and independent auditor in real time.',
            ]} />
            <P>The credits system operates on a blockchain-based public ledger. The ledger is publicly visible, tamper-resistant, decentralised, and auditable in real time, enabling civil society, independent bodies, and ordinary citizens to monitor the system continuously. Because the ledger is public, administrators&apos; own actions are equally visible and equally accountable.</P>
          </Sub>
          <Sub title="3.3 International Trade and Foreign Exchange">
            <P>Merit-Sovereignism does not mean economic isolation. The nation participates actively in global trade. Two parallel economic systems operate simultaneously: the domestic credits economy for transactions between citizens, and a sovereign foreign exchange reserve earned through exports. When a citizen needs something that requires foreign exchange, they spend credits to access the state-managed allocation. The state intermediates every international transaction on behalf of the collective.</P>
          </Sub>
          <Sub title="3.4 Automation and Labour">
            <P>The state actively invests in automation for repetitive and lower-tier work. Automation serves the collective, not private shareholders. Productivity gains from automation flow into the national collective fund, reducing the credit cost of goods and services for all citizens. No citizen is displaced without transition support and reallocation into alternative contribution roles.</P>
          </Sub>
        </Section>

        <Section number="Part IV" title="Education and Career Pipeline">
          <Sub title="4.1 Universal High-Tier Education">
            <P>Every school in the nation, from primary to university, is collectively owned and equally resourced. There are no elite private schools and no underfunded public schools. A child in a rural village attends a school with the same quality of teachers, facilities, and curriculum as a child in the capital city.</P>
          </Sub>
          <Sub title="4.2 Open Enrollment with Merit Guidance">
            <P>Enrollment in all schools is open. A dedicated Education Guidance function analyses each student&apos;s academic profile and directs them toward fields where they demonstrate the greatest aptitude. Students retain the right to choose their own academic path. Guidance is advisory, not compulsory.</P>
          </Sub>
          <Sub title="4.3 Contribution Tiers">
            <P>Occupations are classified into contribution tiers which determine credit allocations and lifestyle benefits:</P>
            <Ul items={[
              'Tier 1 (High): Medical doctors, engineers, scientists, professors, national researchers, judges, senior educators.',
              'Tier 2 (Mid): Teachers, skilled technicians, nurses, administrators, civil engineers, agricultural specialists.',
              'Tier 3 (Base): Essential service workers, transport operators, farmers, maintenance workers, security personnel.',
            ]} />
            <P>Tier classifications are proposed by expert panels, subject to a 90-day public challenge period, reviewed by the legislature, and revisited every five years. No classification is permanent.</P>
          </Sub>
        </Section>

        <Section number="Part V" title="Credits, Benefits, and Inheritance">
          <Sub title="5.1 Lifetime Benefit Guarantee">
            <P>A worker retains their contribution tier benefits for life, including after retirement. A doctor who retires after decades of service continues to access doctor-tier housing, transport, and lifestyle credits. This is the social contract: give your best years to the collective, and the collective provides for your dignity until the end.</P>
          </Sub>
          <Sub title="5.2 Benefits Are Not Saleable">
            <P>No benefit asset, whether housing, vehicles, or travel credits, may be sold. Workers cannot accumulate assets to sell, hoard, or leverage as private capital. Upon death or demotion, all assets return to collective allocation.</P>
          </Sub>
          <Sub title="5.3 Inheritance Provisions">
            <P>Upon the death of a working citizen, their immediate family receives: the right to continue residing in their current home until dependent children reach legal adulthood, a one-time credit transfer to cover the transition period, and full access to the universal basic guarantee for all surviving dependents. Children of high-tier workers do not inherit their parent&apos;s tier status. Tier is earned through examination and demonstrated competence.</P>
          </Sub>
        </Section>

        <Section number="Part VI" title="Constitutional Architecture">
          <Sub title="6.1 How a Nation Adopts Merit-Sovereignism">
            <P>Merit-Sovereignism does not prescribe how a nation transitions to this system. That depends on the specific political, historical, and social conditions of each country. The philosophy does not require a specific route. It requires fidelity to its principles once adopted.</P>
          </Sub>
          <Sub title="6.2 Constitutional Entrenchment">
            <P>The following elements must be constitutionally entrenched and modifiable only through a supermajority legislative vote followed by a public referendum:</P>
            <Ul items={[
              'Hard term limits on all elected positions with no exceptions.',
              'The independence and appointment mechanism of the Constitutional Court.',
              'The public decentralised ledger and credits system structure.',
              'The Anti-Corruption Body\'s independence and citizen-only election mechanism.',
              'The Civic Examination Body\'s independence and constitutionally fixed content.',
              'The collective ownership of land, housing, and natural resources.',
              'The universal basic guarantee of home, food, healthcare, education, and transport for every citizen.',
            ]} />
          </Sub>
          <Sub title="6.3 The Role of Citizens">
            <P>No constitutional design is self-executing. Every safeguard ultimately depends on enough citizens, judges, and civil society actors being willing to defend it. This is why the system invests heavily in education and civic knowledge from the earliest ages. Good institutions build civic character. Civic character defends good institutions. The two are mutually reinforcing across generations.</P>
          </Sub>
        </Section>

        <Section number="Part VII" title="International Relations and Export Economy">
          <Sub title="7.1 Export of Talent">
            <P>A nation known for producing world-class engineers, doctors, scientists, and professors becomes geographically powerful without military aggression. Citizens who work abroad do so under state-negotiated agreements, remitting a portion of their foreign earnings to the national collective fund while retaining personal credits and benefits.</P>
          </Sub>
          <Sub title="7.2 Trade Philosophy">
            <P>The nation trades strategically, exporting what it produces in surplus and importing what it needs efficiently. The nation prioritises value-added exports over raw material exports, processing goods domestically before export wherever possible.</P>
          </Sub>
          <Sub title="7.3 Free Travel for Citizens">
            <P>Citizens may travel internationally using a nationally operated airline service accessible via the credits system. Travel is allocated based on credits and, for high-demand routes, prioritised by contribution tier with base access guaranteed to all.</P>
          </Sub>
        </Section>

        {/* CLOSING */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem', marginBottom: '3rem' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Closing Declaration</p>
          <P>Merit-Sovereignism is not a promise of perfection. It is a serious attempt to build a system that learns from the failures of every system that came before it. It takes the dignity guarantee of communism and adds human incentive. It takes the accountability mechanisms of democracy and removes party corruption. It takes the productivity of market economies and removes the hereditary concentration of wealth.</P>
          <P>Africa is 17% of humanity. Its governance failures are not only a tragedy for Africans. They are a loss for the species. Every scientist not produced, every engineer not trained, every philosopher not heard because of institutional failure is a subtraction from what humanity could have known and built. Merit-Sovereignism exists to change that arithmetic.</P>
          <P>What it asks of a nation is courage. The courage to build something new, to endure the difficulty of transformation, and to trust that a generation raised with free schools, guaranteed homes, and a fair meritocratic ladder will build something the world has never seen.</P>
          <blockquote style={{ borderLeft: '3px solid var(--gold)', padding: '0.5rem 0 0.5rem 1.8rem', margin: '2rem 0' }}>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--charcoal)', lineHeight: 1.75 }}>
              Sovereignty to the people. Advancement by merit. Power accountable to the law.
            </p>
          </blockquote>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', color: 'var(--muted)', marginTop: '1.5rem' }}>
            First Edition · 2026 · The African Mind · theafricanmind.com
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: 'var(--black)', padding: '2.5rem', borderRadius: '2px' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem' }}>Continue Reading</p>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.6rem' }}>Essays Applying Merit-Sovereignism</p>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.6)', marginBottom: '1.5rem' }}>Read how these principles apply to Nigeria&apos;s real governance challenges.</p>
          <Link href="/merit-sovereignism" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', borderBottom: '1px solid var(--gold)', paddingBottom: '2px', textDecoration: 'none' }}>
            Back to Merit-Sovereignism →
          </Link>
        </div>

      </div>

      <Footer />
    </>
  )
}
