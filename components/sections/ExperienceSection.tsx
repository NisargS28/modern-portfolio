'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    date: 'May — Jul 2026', role: 'AI Solutions Intern', company: 'SKAPS Industries India Pvt. Ltd.',
    bullets: ['Built an organization-specific RAG chatbot for context-aware internal answers.', 'Automated extraction of 10 invoice fields, reducing manual data entry by about 90%.', 'Automated shipment status, ETA and ETD tracking for roughly 150 containers per day.'],
    tags: ['Python', 'RAG', 'Power Automate', 'Next.js']
  },
  {
    date: 'Dec 2025 — Jan 2026', role: 'Frontend Web Developer Intern', company: 'Web Development Committee, PDEU',
    bullets: ['Built reusable Mentor-Mentee Portal interfaces in Next.js.', 'Integrated Appwrite APIs and multi-file ZIP downloads from cloud storage.'],
    tags: ['Next.js', 'React', 'Appwrite', 'REST APIs']
  },
  {
    date: 'Jun — Jul 2025', role: 'Frontend Web Developer', company: 'Webdesk Solutions Pvt. Ltd.',
    bullets: ['Completed practical MERN training and implemented full-stack application features.', 'Strengthened REST API, database integration and modern frontend fundamentals.'],
    tags: ['MERN', 'Node.js', 'MongoDB', 'React']
  },
  {
    date: 'Jul — Aug 2023', role: 'Cyber Security Intern', company: 'Heritage Cyberworld LLP',
    bullets: ['Used Wireshark, Snort, Nessus and OpenVAS for monitoring and vulnerability assessment.', 'Supported security audits, threat analysis and incident-response activities.'],
    tags: ['Cybersecurity', 'Wireshark', 'Nessus', 'Incident response']
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-6 lg:grid-cols-2">
          <div><span className="section-kicker">04 / Journey</span><h2 className="font-grotesk text-4xl font-bold tracking-tight md:text-6xl">Learning through real constraints.</h2></div>
          <div className="self-end rounded-2xl border border-textMain/10 p-5 text-sm leading-relaxed text-muted"><strong className="font-grotesk text-textMain">Education:</strong> B.Tech in Computer Engineering, Pandit Deendayal Energy University (2024—2027), following a Diploma in Information Technology from SAL Institute (CGPA 8.73).</div>
        </div>
        <div className="border-t border-textMain/15">
          {experiences.map((experience, index) => (
            <motion.article key={experience.company} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="grid gap-5 border-b border-textMain/15 py-8 lg:grid-cols-[.35fr_.55fr_1.1fr]">
              <p className="font-grotesk text-sm font-bold text-primary">{experience.date}</p>
              <div><h3 className="font-grotesk text-xl font-bold">{experience.role}</h3><p className="mt-1 text-sm text-muted">{experience.company}</p></div>
              <div><ul className="space-y-2 text-sm leading-relaxed text-muted">{experience.bullets.map(bullet => <li key={bullet} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />{bullet}</li>)}</ul><div className="mt-5 flex flex-wrap gap-2">{experience.tags.map(tag => <span key={tag} className="rounded-full bg-textMain/5 px-3 py-1 text-xs font-semibold text-muted">{tag}</span>)}</div></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
