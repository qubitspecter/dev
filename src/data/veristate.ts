export type Tier = 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
export type Coverage = 'Full' | 'Partial' | 'Supports';

export interface Control {
  /** Display ID, e.g. "VS.DA.01". The modal DOM id becomes "modal-VS-DA-01". */
  id: string;
  title: string;
  /** One entry per paragraph. */
  description: string[];
  /** ASD Essentials principle IDs with the number of actions each covers. */
  asd: { id: string; actions: number }[];
  smb: { tier: Tier; name: string; coverage: Coverage }[];
  attack: string[];
}

export const tierColours: Record<Tier, string> = {
  Bronze: '#9c5a24',
  Silver: '#6b7586',
  Gold: '#9a7b00',
  Platinum: '#3d7f96',
  Diamond: '#5b67d1',
};

export const asdPrinciples: Record<string, string> = {
  'PRO-04': 'Secure configuration management',
  'PRO-05': 'Secure administration',
  'PRO-06': 'Vulnerability management',
  'PRO-07': 'Trustworthy software',
  'PRO-08': 'Cryptographic protection',
  'PRO-09': 'Content filtering',
  'PRO-10': 'Regular and proven backups',
  'PRO-12': 'Least privilege access',
  'PRO-13': 'Identity, credential and access management',
  'PRO-16': 'Cyber supply chain security',
  'DET-02': 'Cyber security event detection',
  'DET-04': 'Baselined high-risk access activities',
};

const EDR = 'EDR (Diamond: EDR with MDR)';
const NOADMIN = 'No admin privileges for standard accounts';
const MFA_EMAIL = 'MFA on employee email';
const MFA_APPS = 'MFA on business apps and social media';
const INDIVIDUAL = 'Individual user accounts';
const REMOTE_CLOUD = 'Remote access cloud credentials';
const AV = 'Antivirus on all devices';

export const controls: Control[] = [
  // ---------- Deterministic Access ----------
  {
    id: 'VS.DA.01',
    title: 'Phishing-Resistance',
    description: [
      'Every user, with no exceptions, signs in with a phishing-resistant credential. Passkeys are defined, assigned and enforced, so credential theft, password phishing and MFA fatigue become things of the past.'
    ],
    asd: [{ id: 'PRO-13', actions: 2 }],
    smb: [
      { tier: 'Silver', name: MFA_EMAIL, coverage: 'Full' },
      { tier: 'Gold', name: MFA_APPS, coverage: 'Full' },
      { tier: 'Platinum', name: 'MFA where important data is stored', coverage: 'Full' },
      { tier: 'Bronze', name: 'Strong password hygiene', coverage: 'Full' },
      { tier: 'Silver', name: INDIVIDUAL, coverage: 'Supports' },
      { tier: 'Silver', name: 'Password manager', coverage: 'Partial' },
    ],
    attack: ['Account Manipulation', 'Adversary-in-the-Middle', 'Brute Force', 'Multi-Factor Authentication Request Generation', 'Phishing', 'Remote Services', 'Valid Accounts'],
  },
  {
    id: 'VS.DA.02',
    title: 'Compliant Devices',
    description: [
      'A device compliance policy is comprehensively defined and enforced. Unpatched or misconfigured devices are remediated, and unapproved devices are blocked from company data.',
    ],
    asd: [{ id: 'PRO-04', actions: 2 }, { id: 'DET-04', actions: 1 }],
    smb: [
      { tier: 'Bronze', name: 'Firewall', coverage: 'Partial' },
      { tier: 'Bronze', name: AV, coverage: 'Full' },
      { tier: 'Gold', name: EDR, coverage: 'Full' },
    ],
    attack: ['Command and Scripting Interpreter', 'Exploit Public-Facing Application', 'External Remote Services', 'Network Service Discovery', 'OS Credential Dumping', 'Server Software Component', 'System Binary Proxy Execution', 'User Execution', 'Valid Accounts', 'Windows Management Instrumentation'],
  },
  {
    id: 'VS.DA.03',
    title: 'Self-Service Risk Recovery',
    description: [
      'Risk detected heuristically, such as an unusual sign-in, can be cleared by users themselves using strong authentication on an enrolled device. No more forced password resets and helpdesk calls.',
    ],
    asd: [{ id: 'DET-04', actions: 1 }],
    smb: [],
    attack: ['Account Manipulation', 'Remote Access Tools', 'Use Alternate Authentication Material', 'Valid Accounts'],
  },
  {
    id: 'VS.DA.04',
    title: 'Bypass Prevention',
    description: [
      'Unusual sign-in routes such as legacy protocols, device code flow and authentication transfer are rejected outright, so strong authentication cannot be sidestepped.',
    ],
    asd: [{ id: 'PRO-13', actions: 2 }],
    smb: [
      { tier: 'Silver', name: MFA_EMAIL, coverage: 'Supports' },
      { tier: 'Gold', name: MFA_APPS, coverage: 'Supports' },
    ],
    attack: ['Account Manipulation', 'Adversary-in-the-Middle', 'Brute Force', 'Valid Accounts'],
  },
  {
    id: 'VS.DA.05',
    title: 'Session Protection',
    description: [
      'Token protection and continuous access evaluation are in place, so stolen or replayed sessions fail to grant access, and revoking a user takes effect almost immediately.',
    ],
    asd: [{ id: 'PRO-13', actions: 2 }],
    smb: [],
    attack: ['Credentials from Password Stores', 'Steal Application Access Token', 'Steal or Forge Authentication Certificates', 'Unsecured Credentials', 'Valid Accounts'],
  },
  {
    id: 'VS.DA.06',
    title: 'Secure Enrolment',
    description: [
      'It is easy to create requirement loops, such as needing a compliant device to enrol a passkey and a passkey to enrol the device. Secure paths for device and passkey enrolment exist, so enforcement never depends on an exception.',
    ],
    asd: [{ id: 'PRO-13', actions: 2 }],
    smb: [{ tier: 'Silver', name: INDIVIDUAL, coverage: 'Supports' }],
    attack: ['Brute Force', 'Valid Accounts'],
  },

  // ---------- Zero Admin ----------
  {
    id: 'VS.ZA.01',
    title: 'Delegated Tasks',
    description: [
      'Rather than relying on many powerful admin accounts, routine privileged tasks are handed to privileged processes that an unprivileged user can operate. The work gets done, and the privilege stays in the process instead of the person.',
    ],
    asd: [{ id: 'PRO-12', actions: 2 }],
    smb: [{ tier: 'Silver', name: NOADMIN, coverage: 'Supports' }],
    attack: ['Account Manipulation', 'Create Account'],
  },
  {
    id: 'VS.ZA.02',
    title: 'Just-in-Time Privilege',
    description: [
      'Admin roles are still needed sometimes, but nobody holds them permanently. Roles are activated for a limited term, and only by users who are regularly reviewed and approved to hold them.',
    ],
    asd: [{ id: 'PRO-05', actions: 2 }],
    smb: [
      { tier: 'Silver', name: NOADMIN, coverage: 'Full' },
      { tier: 'Platinum', name: REMOTE_CLOUD, coverage: 'Partial' },
    ],
    attack: ['Account Manipulation', 'Adversary-in-the-Middle', 'OS Credential Dumping', 'Steal Application Access Token', 'Steal Web Session Cookie', 'Steal or Forge Kerberos Tickets', 'Use Alternate Authentication Material', 'Valid Accounts'],
  },
  {
    id: 'VS.ZA.03',
    title: 'Approval Flow',
    description: [
      'When an admin wants to activate a privileged role, the request goes to designated approvers who review and approve or deny it. No more rogue admins having free run of the environment.',
    ],
    asd: [{ id: 'PRO-12', actions: 2 }, { id: 'PRO-05', actions: 1 }],
    smb: [{ tier: 'Silver', name: NOADMIN, coverage: 'Supports' }],
    attack: ['Account Manipulation', 'Adversary-in-the-Middle', 'OS Credential Dumping', 'Steal Application Access Token', 'Steal Web Session Cookie', 'Valid Accounts'],
  },
  {
    id: 'VS.ZA.04',
    title: 'Admin Safeguards',
    description: [
      'Administrative users face additional access scrutiny. Admin accounts are separate from everyday accounts and carry no licences, so there is no inbox to phish. They are held to stronger conditional access policies with shorter sessions, so privileged access stays tightly controlled.',
    ],
    asd: [{ id: 'PRO-05', actions: 2 }, { id: 'PRO-12', actions: 1 }],
    smb: [
      { tier: 'Silver', name: NOADMIN, coverage: 'Supports' },
      { tier: 'Silver', name: INDIVIDUAL, coverage: 'Supports' },
    ],
    attack: ['Account Manipulation', 'Create Account', 'Exploitation for Privilege Escalation', 'OS Credential Dumping', 'Steal Application Access Token', 'Steal Web Session Cookie', 'Valid Accounts'],
  },
  {
    id: 'VS.ZA.05',
    title: 'Local Admin Rights',
    description: [
      'Devices are limited to regular users. When a specific task needs admin privileges on a specific device, one-time credentials are issued for that job, and local admin passwords are unique and rotated.',
    ],
    asd: [{ id: 'PRO-12', actions: 1 }, { id: 'PRO-13', actions: 1 }],
    smb: [
      { tier: 'Silver', name: NOADMIN, coverage: 'Full' },
      { tier: 'Silver', name: INDIVIDUAL, coverage: 'Supports' },
    ],
    attack: ['Account Manipulation', 'Brute Force', 'Create Account', 'Valid Accounts'],
  },
  {
    id: 'VS.ZA.06',
    title: 'Emergency Access',
    description: [
      'Emergency global admin accounts are set up to keep working through maximal system failure: bound to physical keys, locked away for very rainy days, and any use raises an alert.',
    ],
    asd: [{ id: 'PRO-13', actions: 1 }],
    smb: [{ tier: 'Platinum', name: REMOTE_CLOUD, coverage: 'Supports' }],
    attack: ['Brute Force', 'Valid Accounts'],
  },

  // ---------- Execution Control ----------
  {
    id: 'VS.EC.01',
    title: 'Application Whitelist',
    description: [
      'Antivirus chases: new malware is discovered and added to a list. App control puts you in charge, so you approve what is allowed to run and everything else is denied.',
    ],
    asd: [{ id: 'PRO-07', actions: 2 }],
    smb: [{ tier: 'Diamond', name: 'Application control', coverage: 'Full' }],
    attack: ['Command and Scripting Interpreter', 'Impair Defenses', 'Masquerading', 'Process Injection', 'System Binary Proxy Execution', 'User Execution', 'Windows Management Instrumentation'],
  },
  {
    id: 'VS.EC.02',
    title: 'Web Browser Security',
    description: [
      'Browser extensions are a critical path to your data, especially cloud services. Ad blocking is mandated and unapproved extensions are rejected.',
    ],
    asd: [{ id: 'PRO-07', actions: 3 }, { id: 'PRO-09', actions: 1 }],
    smb: [],
    attack: ['Command and Scripting Interpreter', 'Impair Defenses', 'Implant Internal Image', 'Ingress Tool Transfer', 'Masquerading', 'Phishing', 'Process Injection', 'Remote Services', 'Supply Chain Compromise', 'System Binary Proxy Execution', 'Trusted Relationship', 'User Execution', 'Windows Management Instrumentation'],
  },
  {
    id: 'VS.EC.03',
    title: 'Cloud Application Approvals',
    description: [
      'Normal users cannot open doors into your cloud environment by installing or consenting to applications. Instead, they get a path to request admin approval for valid applications.',
    ],
    asd: [{ id: 'PRO-16', actions: 1 }, { id: 'PRO-07', actions: 1 }],
    smb: [{ tier: 'Diamond', name: 'Supplier digital trust programme', coverage: 'Partial' }],
    attack: ['Account Manipulation', 'Steal Application Access Token', 'Supply Chain Compromise', 'Trusted Relationship', 'Valid Accounts'],
  },
  {
    id: 'VS.EC.04',
    title: 'Office Protections',
    description: [
      "Documents and applications are boxed in. Office macros from the internet are blocked, Office apps can't launch other programs or inject code, scripts and email attachments can't run executables, and Windows exploit protection is switched on. Attacks that rely on someone opening a file have nowhere to go.",
      'Additionally 1.0.0.3 is used to enforce encrypted DNS and C2 filtering',
    ],
    asd: [{ id: 'PRO-04', actions: 2 }, { id: 'PRO-09', actions: 2 }],
    smb: [{ tier: 'Diamond', name: 'Disable untrusted Office macros', coverage: 'Full' }],
    attack: ['Application Layer Protocol', 'Command and Scripting Interpreter', 'Exfiltration Over Alternative Protocol', 'Exfiltration Over C2 Channel', 'Exfiltration Over Web Service', 'Exploit Public-Facing Application', 'External Remote Services', 'Network Service Discovery', 'OS Credential Dumping', 'Phishing', 'Proxy', 'Server Software Component', 'User Execution', 'Windows Management Instrumentation'],
  },
  {
    id: 'VS.EC.05',
    title: 'Advanced Attack Defense',
    description: [
      'Adversaries love to use your own system against you. Vulnerable drivers are blocked, standard utilities can\u2019t be combined into attack tools (so called \u201Cliving off the land\u201D), stored credentials are shielded from theft, and legacy protocols such as SMBv1, NTLM and LLMNR are switched off. Even extremely capable attackers struggle to make a home in your environment.',
    ],
    asd: [{ id: 'DET-04', actions: 1 }, { id: 'PRO-04', actions: 1 }],
    smb: [{ tier: 'Gold', name: EDR, coverage: 'Supports' }],
    attack: ['Command and Scripting Interpreter', 'Exploit Public-Facing Application', 'External Remote Services', 'System Binary Proxy Execution', 'User Execution', 'Valid Accounts'],
  },
  {
    id: 'VS.EC.06',
    title: 'Auto-Remediation',
    description: [
      'Problems fix themselves. Non-compliant devices, missing patches, malware detections and risky users are corrected by policy rather than by a ticket, while your MSP grows bored.',
    ],
    asd: [{ id: 'DET-02', actions: 1 }, { id: 'DET-04', actions: 1 }],
    smb: [{ tier: 'Gold', name: EDR, coverage: 'Partial' }],
    attack: ['Command and Scripting Interpreter', 'System Binary Proxy Execution', 'Valid Accounts'],
  },

  // ---------- Hardened Environment ----------
  {
    id: 'VS.HE.01',
    title: 'Backups',
    description: [
      "Backups are automated, regularly tested, and cover both data and configuration. They stay out of reach even if your environment is compromised. It's too easy to ignore backups until you wish you had them.",
    ],
    asd: [{ id: 'PRO-10', actions: 8 }],
    smb: [{ tier: 'Bronze', name: 'Backup and recovery', coverage: 'Full' }],
    attack: ['Data Destruction', 'Data Encrypted for Impact', 'Data Manipulation', 'Data from Local System', 'Inhibit System Recovery', 'Service Stop'],
  },
  {
    id: 'VS.HE.02',
    title: 'Email Security',
    description: [
      'DMARC, SPF and DKIM: alphabet soup that keeps outsiders from sending mail that pretends to be from your company.',
    ],
    asd: [{ id: 'PRO-09', actions: 2 }],
    smb: [{ tier: 'Silver', name: 'Email authentication (SPF, DKIM, DMARC)', coverage: 'Full' }],
    attack: ['Ingress Tool Transfer', 'Phishing', 'Remote Services', 'User Execution'],
  },
  {
    id: 'VS.HE.03',
    title: 'Encryption',
    description: [
      'Encryption is enforced on every device, turning a lost or stolen laptop from a catastrophe into an inconvenience.',
    ],
    asd: [{ id: 'PRO-08', actions: 1 }],
    smb: [{ tier: 'Diamond', name: 'Encryption of important data at rest', coverage: 'Partial' }],
    attack: ['Adversary-in-the-Middle', 'Data from Cloud Storage', 'Network Sniffing'],
  },
  {
    id: 'VS.HE.04',
    title: 'Patch Management',
    description: [
      'What gets patched, and when, is defined and then enforced. Users are not left to their own schedule.',
    ],
    asd: [{ id: 'PRO-06', actions: 4 }],
    smb: [{ tier: 'Bronze', name: 'Automatic updates and patches', coverage: 'Full' }],
    attack: ['Exploit Public-Facing Application', 'Exploitation for Client Execution', 'Exploitation for Privilege Escalation', 'Exploitation of Remote Services'],
  },
  {
    id: 'VS.HE.05',
    title: 'Tamper Protection',
    description: [
      'The settings in effect are the settings the business defined, not ad hoc changes of the moment. Security tooling cannot be switched off or quietly reconfigured, even by a local admin.',
    ],
    asd: [{ id: 'PRO-04', actions: 2 }],
    smb: [
      { tier: 'Bronze', name: AV, coverage: 'Supports' },
      { tier: 'Gold', name: EDR, coverage: 'Supports' },
    ],
    attack: ['Command and Scripting Interpreter', 'Exploit Public-Facing Application', 'External Remote Services', 'Impair Defenses', 'Modify Registry', 'User Execution'],
  },
  {
    id: 'VS.HE.06',
    title: 'File Sharing',
    description: [
      'Files cannot leave the business by accident or in bulk. External sharing and anonymous links across SharePoint and OneDrive are restricted to what the business needs.',
    ],
    asd: [{ id: 'PRO-12', actions: 1 }, { id: 'PRO-09', actions: 1 }],
    smb: [],
    attack: ['Account Manipulation', 'Create Account', 'Exfiltration Over Alternative Protocol', 'Exfiltration Over C2 Channel', 'Proxy'],
  },
];
