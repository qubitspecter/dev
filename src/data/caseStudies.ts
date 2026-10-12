export interface CaseStudy {
    slug: string;
    /** Short sector label, used on the listing card and as the page's eyebrow. */
    sector: string;
    title: string;
    /** One or two sentences under the headline. */
    summary: string;
    /** Shorter text for the listing card. */
    teaser: string;
    /** The one number the listing card leads with. */
    headline: { figure: string; caption: string };
    glance: [term: string, value: string | string[]][];
    background: string[];
    findingsIntro: string;
    findings: string[];
    /** Third section: "Remediation", "Approach" or "Implementation". */
    method: {
        title: string;
        columns: string[];
        rows: (string | string[])[][];
    };
    stats: { figure: string; from?: string; label: string; note?: string }[];
    outcomes: { title: string; text: string }[];
}

export const caseStudies: CaseStudy[] = [
    {
        slug: 'wealth-management-essential-eight',
        sector: 'Wealth management',
        title: 'Essential Eight Uplift',
        summary:
            "A ransomware attack disrupted a wealth management practice's operations for several days. Six weeks after the first call, its Microsoft Secure Score had gone from 42% to 98%, its cyber insurance cover had increased at a lower rate, and its controls were attested every day.",
        teaser:
            'After a ransomware attack, a practice of under 25 staff moved its Microsoft Secure Score from 42% to 98% in six weeks, and its cyber insurance cover increased at a lower rate.',
        headline: { figure: '42% to 98%', caption: 'Microsoft Secure Score in six weeks' },
        glance: [
            ['Client', 'Australian wealth management practice'],
            ['Scale', 'Under 25 staff and 30 devices, plus personal mobiles'],
            ['Starting point', 'Microsoft 365, industry cloud apps, and general IT and malware monitoring from an outsourced provider. Microsoft Secure Score of 42%, with no security documentation.'],
            ['Why', 'Recovery from a security incident. The client asked for Decoheron by name.'],
            ['Timeline', 'Six weeks from first call to full implementation'],
            ['Result', [
                'Secure Score from 42% to 98%',
                'ASD Essential Eight (E8) Maturity Level 2 alignment',
                'Configuration attested daily',
                'Cyber insurance cover increased at a lower rate',
            ]],
        ],
        background: [
            "A ransomware attack disrupted the firm's operations for several days. The attackers deployed off-the-shelf ransomware. The firm's data was backed up, but its operating environment was not, which prolonged the outage.",
            "Security at the time rested on basic malware monitoring from the firm's outsourced IT provider. A client who knew Decoheron's founder from earlier work suggested engaging Decoheron for an Essential Eight-aligned uplift. The ASD Essential Eight is the Australian Signals Directorate's set of eight baseline mitigation strategies for cyber security incidents.",
        ],
        findingsIntro:
            'Triage found the conditions below. Forensics never established how the attackers got in, but each of these makes an attack easier.',
        findings: [
            'Seven Global Admin accounts (the highest-privilege role in Microsoft 365, able to change any setting) were in use, five of them daily for browsing and email.',
            'Most staff had administrator rights on their own devices.',
            'Multi-factor authentication was often enabled, but not enforced.',
            'No devices were centrally managed, and personal devices could sign in freely.',
            'Backups covered data, but not the operating environment.',
            "Microsoft Secure Score (Microsoft's own measure of how many of its recommended security settings are in place) was 42%, which indicates significant gaps.",
        ],
        method: {
            title: 'Remediation',
            columns: ['Step', 'When', 'Details'],
            rows: [
                ['Triage', 'Day 1', ['Snapshot and lock environment', 'Purge the superfluous and questionable', 'Hardware authentication on admins', 'Scan environment and review logs']],
                ['Assessment', 'Week 1', ['Operational requirements', 'Understand user workflow', 'Map IT and discover shadow IT (software and services in use that the business has not approved or recorded)']],
                ['Consolidation', 'Weeks 1-3', ['Enrol devices into management', 'Single sign-on for applicable systems', 'Remove obsolete software and access']],
                ['Security Uplift', 'Weeks 2-5', ['Passwordless authentication', 'Conditional Access policies (rules that decide who can sign in, and from what device)', 'Restricted administrative privileges', 'Application control (only approved software can run)', 'User application hardening', 'Patching and full-environment backups']],
                ['Documentation', 'Weeks 4-6', ['Recovery and continuity plans', 'Documentation of controls', 'Insurance questionnaire', 'Investor report on E8 alignment']],
                ['Attestation', 'Week 6 onward', ['VeriState daily attestation', 'Microsoft Defender']],
            ],
        },
        stats: [
            { from: '7', figure: '0', label: 'Global Admin accounts in use', note: 'Two sealed break-glass accounts (emergency accounts, used only if normal admin access fails) remain.' },
            { from: 'None', figure: 'All', label: 'Work devices under central management', note: 'Personal computers blocked.' },
            { from: '42%', figure: '98%', label: 'Microsoft Secure Score', note: 'Essential Eight Maturity Level 2 alignment, with configuration attested daily.' },
        ],
        outcomes: [
            {
                title: 'Operations',
                text: 'With devices enrolled, application control in place and no one holding admin rights, day-to-day IT is smoother and problems caused by unexpected changes have stopped. Mobile access is limited to Teams and email, and passwordless sign-in means staff training can focus on payment fraud instead of credential phishing.',
            },
            {
                title: 'Clients',
                text: 'Several have asked for security reports, and the firm now provides two. One sets out how the firm addresses each Essential Eight control. The other attests to the current state of the environment, so drift from the baseline can be detected. Either is available within 24 hours of a request.',
            },
            {
                title: 'Business',
                text: 'Cyber insurance cover increased while the annual premium fell. IT running costs have also fallen thanks to clear documentation and fewer alerts. Daily attestations by VeriState and a Microsoft Secure Score of 98% give the partners a current view of, and confidence in, their security position at any time.',
            },
        ],
    },
    {
        slug: 'law-practice-ready-for-what-comes-next',
        sector: 'Law practice',
        title: 'Ready for What Comes Next',
        summary:
            "A Victorian law practice wanted to go beyond its regulator's minimum. About four months after the first call, one set of controls aligned with the VLSB+C expectations, the ASD Essential Eight, SMB1001 and the NIST Cybersecurity Framework was attested daily, and a satellite office had opened without issue.",
        teaser:
            "A Victorian law practice went beyond its regulator's minimum with one set of controls aligned to four frameworks, attested daily, and opened a satellite office without issue.",
        headline: { figure: '1 set', caption: 'of controls across four frameworks, attested daily' },
        glance: [
            ['Client', 'Victorian law practice'],
            ['Scale', 'Under 30 staff on Microsoft 365'],
            ['Starting point', 'Endpoint protection in place and basic security overall, broadly in line with the VLSB+C expectations'],
            ['Why', 'Go beyond the VLSB+C minimums with Essential Eight, SMB1001 and NIST CSF alignment, and open new offices securely and quickly'],
            ['Timeline', 'About four months from first call to full implementation'],
            ['Result', [
                'One set of controls aligned with the VLSB+C expectations, Essential Eight, SMB1001 and NIST CSF',
                'Controls adopted at appropriate levels, not to reach a single rating',
                'A security strategy with goals; a satellite office opened without issue',
                'Attestation of controls available to clients within one day',
            ]],
        ],
        background: [
            "As a Victorian law practice, the firm is expected to meet the Victorian Legal Services Board and Commissioner's (VLSB+C) minimum cybersecurity expectations. It did not want to stop at the minimum. Client and market expectations for security are rising, and the firm wanted to be ready for emerging risks rather than react to them. The firm was also planning to grow, but had no clear view of its security posture and was concerned it would not hold up through that change.",
            'The firm asked Decoheron for a best-of-breed approach aligned with three frameworks: the ASD Essential Eight, SMB1001 (a tiered cyber security standard for small business) and the NIST Cybersecurity Framework (CSF). It also wanted to be able to open new offices or remote work centres quickly and securely.',
        ],
        findingsIntro:
            'Decoheron assessed the practice against the VLSB+C expectations and all three frameworks. The main findings were these.',
        findings: [
            'Security was basic and broadly in line with the VLSB+C expectations, a minimum that does not show alignment with any of the three frameworks.',
            'Many controls were implemented but not enforced, or were left in audit mode (a control that records what it would block, without blocking it). This included multi-factor authentication, application control and conditional access.',
            "There was no security strategy and no clear view of the firm's security posture, so growth was held back by concern that security would not survive change.",
        ],
        method: {
            title: 'Approach',
            columns: ['Framework', 'Target', 'Role in the programme'],
            rows: [
                ['VLSB+C expectations', 'Meet in full', 'The regulatory floor: system and behavioural controls expected of every Victorian law practice'],
                ['Essential Eight', 'Level chosen per control', 'Technical baseline: application control, patching, administrative privileges, multi-factor authentication and backups'],
                ['SMB1001', 'Level chosen per control', 'Tiered standard for small business, giving the firm a recognised benchmark to show clients and insurers'],
                ['NIST CSF', 'Programme structure', 'Governance and risk structure across six functions: Govern, Identify, Protect, Detect, Respond and Recover'],
                ['Control set', 'One, mapped to all four', 'Governance, identity, privilege, applications, procedures and hardening'],
            ],
        },
        stats: [
            { from: 'Ad hoc', figure: 'Strategic', label: 'Security programme', note: 'A repeatable security programme with defined goals and enforced controls.' },
            { figure: '1 set', label: 'Of controls, attested daily', note: 'Covers VLSB+C, Essential Eight, SMB1001 and NIST CSF.' },
        ],
        outcomes: [
            {
                title: 'Operations',
                text: 'Controls that were in audit or report-only mode are now enforced, so protection no longer depends on someone acting on a report. Devices deploy zero-touch (ready to use on first sign-in, with no manual setup), and personal mobiles are supported securely with access limited to email and Teams, so a new office or remote work centre can be set up quickly and securely. The firm has since opened a satellite office without issue. It also has a security strategy with defined goals for continual improvement.',
            },
            {
                title: 'Clients',
                text: "The firm is positioned to respond immediately as client requirements change, because its controls are already mapped to the Essential Eight, SMB1001 and NIST CSF. VeriState, the Decoheron attestation platform, let the firm review its security posture and provide evidence to third parties, such as clients and insurers, within 24 hours.",
            },
            {
                title: 'Business',
                text: 'One set of controls covers governance, identity, privilege, applications, procedures and hardening across all four standards, so the firm maintains one programme rather than four. As the firm expands into new jurisdictions, some of which already recommend SMB1001 Gold, it is positioned to respond to those expectations quickly.',
            },
        ],
    },
    {
        slug: 'msp-zero-trust-client-administration',
        sector: 'Managed service provider',
        title: 'Zero-Trust Client Administration',
        summary:
            'An Australian managed service provider held standing admin rights in every client tenancy. About ten weeks after the first call, every administrative session was approved by the client and came from a known, MSP-owned device, with nothing added for clients, and the MSP obtained cyber insurance for the first time.',
        teaser:
            "An MSP replaced standing admin rights with client-approved access from a known device, added nothing for its clients, and obtained cyber insurance for the first time.",
        headline: { figure: '100%', caption: 'of client tenancy access approved by the client' },
        glance: [
            ['Client', 'Australian managed service provider (MSP)'],
            ['Scale', 'Under 10 technical staff, under 20 client tenancies'],
            ['Starting point', "Operations-focused MSP administering its clients' Microsoft 365 tenancies (each client's own Microsoft 365 environment) with direct, standing admin privileges"],
            ['Why', "Reduce exposure to client incidents after a peer MSP was pursued by a client's insurer"],
            ['Timeline', 'About ten weeks from first call to full implementation'],
            ['Result', [
                'All access to client tenancies explicitly approved by the client',
                'Administrative access only from a known, MSP-owned device',
                'No additional requirements for clients',
                'Cyber insurance obtained for the first time',
            ]],
        ],
        background: [
            "The MSP was focused on operations rather than on building a security practice of its own. That changed when it learned that another MSP was being pursued by a client's insurer after an incident at that client.",
            "The MSP's concern was its own exposure. Administrative access to client tenancies made it a possible route into every client, and a possible party to any claim. It engaged Decoheron to design an administration model it could stand behind with clients and insurers, with no extra technical or licensing requirements for clients.",
        ],
        findingsIntro:
            'Decoheron reviewed how the MSP reached client tenancies. The exposure came down to these points.',
        findings: [
            'Engineers held standing admin rights (permanent rights, available whether or not they were needed) in every client tenancy, so a single compromised account or device could reach every client.',
            'Client approval was not part of the access process, so the MSP could not demonstrate that a given session was authorised by the client.',
            'Administrative access was not tied to a known device.',
            'An incident at a single client could draw the MSP into an insurance claim.',
        ],
        method: {
            title: 'Implementation',
            columns: ['Step', 'Who', 'Details'],
            rows: [
                ['Request', 'MSP engineer', "Requests access to a trusted virtual Privileged Access Workstation (PAW, a locked-down computer used only for administration) through Privileged Identity Management (PIM) for Groups (which grants access only on request, for a limited time) in the MSP's own tenancy"],
                ['Approval', 'Client', "A nominated approver from the client, using an external account in the MSP's tenancy, approves the request"],
                ['Activation', 'PIM', 'Membership of the PAW access group is granted for two hours'],
                ['Device', 'MSP engineer', "Signs in to a Windows 365 PAW that the MSP owns and that is joined to the client's tenancy"],
                ['Device check', 'Conditional Access', 'Blocks MSP administrators from every resource in the tenancy unless they are on that device'],
                ['Access', 'MSP engineer', "Reaches the client's administrative controls from the virtual PAW"],
            ],
        },
        stats: [
            { figure: '100%', label: 'Administrative access explicitly approved by the client' },
            { figure: '0', label: 'Additional requirements placed on clients' },
        ],
        outcomes: [
            {
                title: 'Operations',
                text: "Engineers administer client tenancies from a virtual Windows 365 PAW device the MSP owns, so access depends on a known device as well as on the engineer's credentials. All clients keep standard office hours, so approvals fit the working day, and an after-hours change goes ahead only when the client's approver is available. A small number of clients with specific needs are handled through app registrations (application identities holding only the permissions they need) that grant MSP accounts the limited access required.",
            },
            {
                title: 'Clients',
                text: 'Clients had nothing to install or change. All access to their tenancy is explicitly approved by them, so nothing happens there that they did not agree to.',
            },
            {
                title: 'Business',
                text: 'The MSP obtained cyber insurance for the first time, without carrying the full exposure of every client tenancy. It can now show a client or an insurer that every administrative session was approved by the client and came from a known device, which addresses the exposure behind the project without adding a heavy security programme to an operations-focused business.',
            },
        ],
    },
];
