// Inline SVG icons, same stroke style as the rest of the site. Each entry is a list of path strings.
export const circle = (cx: number, cy: number, r: number) =>
    `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0 ${r} ${r} 0 1 0 ${-r * 2} 0z`;
const rrect = (x: number, y: number, w: number, h: number, r: number) =>
    `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}h${-(w - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}v${-(h - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}z`;

const icons: Record<string, string[]> = {
    award: [circle(12, 9, 5), 'M9 13.4L7.5 21l4.5-2.4 4.5 2.4L15 13.4'],
    shield: ['M12 3l7 2.6v5.4c0 4.4-2.9 8-7 10-4.1-2-7-5.6-7-10V5.6z'],
    shieldCheck: ['M12 3l7 2.6v5.4c0 4.4-2.9 8-7 10-4.1-2-7-5.6-7-10V5.6z', 'M8.8 12l2.4 2.4 4.2-4.6'],
    cloud: ['M7.5 18a4.5 4.5 0 0 1-.4-8.98A6 6 0 0 1 18.6 10.5 3.75 3.75 0 0 1 18 18z'],
    users: [circle(9, 8, 3), 'M3 19v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1', 'M16 5.2a3 3 0 0 1 0 5.6', 'M21 19v-1a4.5 4.5 0 0 0-3-4.2'],
    lock: [rrect(5, 11, 14, 9, 2), 'M8 11V8a4 4 0 0 1 8 0v3'],
    checkCircle: [circle(12, 12, 9), 'M8 12.3l2.6 2.6L16 9.5'],
    report: ['M6 3h8l4 4v14H6z', 'M14 3v4h4', 'M9 14l2 2 4-4'],
    clipboard: [rrect(5, 4, 14, 17, 2), 'M9 4V3h6v1', 'M9 12h6M9 16h4'],
    question: [circle(12, 12, 9), 'M9.7 9.6a2.4 2.4 0 1 1 3.4 2.2c-.7.4-1.1.9-1.1 1.8', 'M12 17h.01'],
    check: ['M5 12.5l4.5 4.5L19 7.5'],
    key: [circle(8.5, 15.5, 3.5), 'M11 13l8-8', 'M16 8l2.5 2.5', 'M14 10l2 2'],
    admin: [circle(9.5, 7.5, 3.5), 'M3 20v-1.5A5.5 5.5 0 0 1 8.5 13H10', circle(17, 17, 2.2), 'M17 12.8v1.2M17 20v1.2M12.8 17H14M20 17h1.2M14 14l.9.9M19.1 19.1l.9.9M20 14l-.9.9M14.9 19.1l-.9.9'],
    monitor: [rrect(3, 4, 18, 12, 2), 'M8 20h8M12 16v4'],
    terminal: [rrect(3, 4, 18, 14, 2.5), 'M7 9l3 2.5L7 14', 'M12.5 14.5H15'],
    database: ['M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3z', 'M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6', 'M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3'],
    scales: ['M12 4v16M7 20h10M5 8h14', 'M5 8l-3 6.5a3.2 3.2 0 0 0 6 0L5 8z', 'M19 8l-3 6.5a3.2 3.2 0 0 0 6 0L19 8z'],
    calculator: [rrect(5, 3, 14, 18, 2), rrect(8, 6, 8, 4, 1), 'M8.5 14h.01M12 14h.01M15.5 14h.01M8.5 17.5h.01M12 17.5h.01M15.5 17.5h.01'],
    chart: ['M4 20h16M7 20v-6M12 20V6M17 20v-9'],
};
export const icon = (name: string) =>
    `<svg viewBox="0 0 24 24" class="dh-ico" aria-hidden="true">${icons[name].map((d) => `<path d="${d}"/>`).join('')}</svg>`;

export interface ASDPrinciple {
  code: string;
  text: string;
  actions: string;
}

export interface SMBControl {
  tier: string;
  color: string;
  text: string;
  coverage: string;
}

export interface Control {
  id: string; // e.g. "VS.DA.01"
  title: string;
  status: 'pass' | 'fail';
  description: string[];
  asdPrinciples?: ASDPrinciple[];
  smbControls?: SMBControl[];
  attackTechniques?: string[];
}

export interface ControlCategory {
  title: string;
  icon: string;
  status: 'pass' | 'fail';
  controls: Control[];
}

export const matrixData: ControlCategory[] = [
  {
    title: "Deterministic Access",
    icon: "bi-fingerprint",
    status: "pass",
    controls: [
      {
        id: "VS.DA.01",
        title: "Phishing-Resistance",
        status: "pass",
        description: [
          "Every user, with no exceptions, signs in with a phishing-resistant credential. Passkeys are defined, assigned and enforced, so credential theft, password phishing and MFA fatigue become things of the past.",
          "Users who haven't registered a passkey yet don't cause a failure, because enforcement means they can't sign in until they do."
        ],
        asdPrinciples: [
          { code: "PRO-13", text: "Identity, credential and access management", actions: "2 actions" }
        ],
        smbControls: [
          { tier: "Silver", color: "#6b7586", text: "MFA on employee email", coverage: "Full" },
          { tier: "Gold", color: "#9a7b00", text: "MFA on business apps and social media", coverage: "Full" },
          { tier: "Platinum", color: "#3d7f96", text: "MFA where important data is stored", coverage: "Full" },
          { tier: "Bronze", color: "#9c5a24", text: "Strong password hygiene", coverage: "Full" },
          { tier: "Silver", color: "#6b7586", text: "Individual user accounts", coverage: "Supports" },
          { tier: "Silver", color: "#6b7586", text: "Password manager", coverage: "Partial" }
        ],
        attackTechniques: ["Account Manipulation", "Adversary-in-the-Middle", "Brute Force", "Multi-Factor Authentication Request Generation", "Phishing", "Remote Services", "Valid Accounts"]
      },
      {
        id: "VS.DA.02",
        title: "Compliant Devices",
        status: "pass",
        description: [
          "A device compliance policy is comprehensively defined and enforced. Unpatched or misconfigured devices are remediated, and unapproved devices are blocked from company data."
        ],
        asdPrinciples: [
          { code: "PRO-04", text: "Secure configuration management", actions: "2 actions" },
          { code: "DET-04", text: "Baselined high-risk access activities", actions: "1 action" }
        ],
        smbControls: [
          { tier: "Bronze", color: "#9c5a24", text: "Firewall", coverage: "Partial" },
          { tier: "Bronze", color: "#9c5a24", text: "Antivirus on all devices", coverage: "Full" },
          { tier: "Gold", color: "#9a7b00", text: "EDR (Diamond: EDR with MDR)", coverage: "Full" }
        ],
        attackTechniques: ["Command and Scripting Interpreter", "Exploit Public-Facing Application", "External Remote Services", "Network Service Discovery", "OS Credential Dumping", "Server Software Component", "System Binary Proxy Execution", "User Execution", "Valid Accounts", "Windows Management Instrumentation"]
      },
      {
        id: "VS.DA.03",
        title: "Self-Service Risk Recovery",
        status: "pass",
        description: [
          "Risk detected heuristically, such as an unusual sign-in, can be cleared by users themselves using strong authentication on an enrolled device. No more forced password resets and helpdesk calls."
        ],
        asdPrinciples: [
          { code: "DET-04", text: "Baselined high-risk access activities", actions: "1 action" }
        ],
        attackTechniques: ["Account Manipulation", "Remote Access Tools", "Use Alternate Authentication Material", "Valid Accounts"]
      },
      {
        id: "VS.DA.04",
        title: "Bypass Prevention",
        status: "pass",
        description: [
          "Unusual sign-in routes such as legacy protocols, device code flow and authentication transfer are rejected outright, so strong authentication cannot be sidestepped."
        ],
        asdPrinciples: [
          { code: "PRO-13", text: "Identity, credential and access management", actions: "2 actions" }
        ],
        smbControls: [
          { tier: "Silver", color: "#6b7586", text: "MFA on employee email", coverage: "Supports" },
          { tier: "Gold", color: "#9a7b00", text: "MFA on business apps and social media", coverage: "Supports" }
        ],
        attackTechniques: ["Account Manipulation", "Adversary-in-the-Middle", "Brute Force", "Valid Accounts"]
      },
      {
        id: "VS.DA.05",
        title: "Session Protection",
        status: "pass",
        description: [
          "Token protection and continuous access evaluation are in place, so stolen or replayed sessions fail to grant access, and revoking a user takes effect almost immediately."
        ],
        asdPrinciples: [
          { code: "PRO-13", text: "Identity, credential and access management", actions: "2 actions" }
        ],
        attackTechniques: ["Credentials from Password Stores", "Steal Application Access Token", "Steal or Forge Authentication Certificates", "Unsecured Credentials", "Valid Accounts"]
      },
      {
        id: "VS.DA.06",
        title: "Secure Enrolment",
        status: "pass",
        description: [
          "It is easy to create requirement loops, such as needing a compliant device to enrol a passkey and a passkey to enrol the device. Secure paths for device and passkey enrolment exist, so enforcement never depends on an exception."
        ],
        asdPrinciples: [
          { code: "PRO-13", text: "Identity, credential and access management", actions: "2 actions" }
        ],
        smbControls: [
          { tier: "Silver", color: "#6b7586", text: "Individual user accounts", coverage: "Supports" }
        ],
        attackTechniques: ["Brute Force", "Valid Accounts"]
      }
    ]
  },
  {
    title: "Zero Admin",
    icon: "bi-person-gear",
    status: "pass",
    controls: [
      {
        id: "VS.ZA.01",
        title: "Delegated Tasks",
        status: "pass",
        description: [
          "Rather than relying on many powerful admin accounts, routine privileged tasks are handed to privileged processes that an unprivileged user can operate. The work gets done, and the privilege stays in the process instead of the person."
        ],
        asdPrinciples: [
          { code: "PRO-12", text: "Least privilege access", actions: "2 actions" }
        ],
        smbControls: [
          { tier: "Silver", color: "#6b7586", text: "No admin privileges for standard accounts", coverage: "Supports" }
        ],
        attackTechniques: ["Account Manipulation", "Create Account"]
      },
      {
        id: "VS.ZA.02",
        title: "Just-in-Time Privilege",
        status: "pass",
        description: [
          "Admin roles are still needed sometimes, but nobody holds them permanently. Roles are activated for a limited term, and only by users who are regularly reviewed and approved to hold them."
        ],
        asdPrinciples: [
          { code: "PRO-05", text: "Secure administration", actions: "2 actions" }
        ],
        smbControls: [
          { tier: "Silver", color: "#6b7586", text: "No admin privileges for standard accounts", coverage: "Full" },
          { tier: "Platinum", color: "#3d7f96", text: "Remote access cloud credentials", coverage: "Partial" }
        ],
        attackTechniques: ["Account Manipulation", "Adversary-in-the-Middle", "OS Credential Dumping", "Steal Application Access Token", "Steal Web Session Cookie", "Steal or Forge Kerberos Tickets", "Use Alternate Authentication Material", "Valid Accounts"]
      },
      {
        id: "VS.ZA.03",
        title: "Approval Flow",
        status: "pass",
        description: [
          "When an admin wants to activate a privileged role, the request goes to designated approvers who review and approve or deny it. No more rogue admins having free run of the environment."
        ],
        asdPrinciples: [
          { code: "PRO-12", text: "Least privilege access", actions: "2 actions" },
          { code: "PRO-05", text: "Secure administration", actions: "1 action" }
        ],
        smbControls: [
          { tier: "Silver", color: "#6b7586", text: "No admin privileges for standard accounts", coverage: "Supports" }
        ],
        attackTechniques: ["Account Manipulation", "Adversary-in-the-Middle", "OS Credential Dumping", "Steal Application Access Token", "Steal Web Session Cookie", "Valid Accounts"]
      },
      {
        id: "VS.ZA.04",
        title: "Admin Safeguards",
        status: "pass",
        description: [
          "Administrative users face additional access scrutiny. Admin accounts are separate from everyday accounts and carry no licences, so there is no inbox to phish. They are held to stronger conditional access policies with shorter sessions, so privileged access stays tightly controlled."
        ],
        asdPrinciples: [
          { code: "PRO-05", text: "Secure administration", actions: "2 actions" },
          { code: "PRO-12", text: "Least privilege access", actions: "1 action" }
        ],
        smbControls: [
          { tier: "Silver", color: "#6b7586", text: "No admin privileges for standard accounts", coverage: "Supports" },
          { tier: "Silver", color: "#6b7586", text: "Individual user accounts", coverage: "Supports" }
        ],
        attackTechniques: ["Account Manipulation", "Create Account", "Exploitation for Privilege Escalation", "OS Credential Dumping", "Steal Application Access Token", "Steal Web Session Cookie", "Valid Accounts"]
      },
      {
        id: "VS.ZA.05",
        title: "Local Admin Rights",
        status: "pass",
        description: [
          "Devices are limited to regular users. When a specific task needs admin privileges on a specific device, one-time credentials are issued for that job, and local admin passwords are unique and rotated."
        ],
        asdPrinciples: [
          { code: "PRO-12", text: "Least privilege access", actions: "1 action" },
          { code: "PRO-13", text: "Identity, credential and access management", actions: "1 action" }
        ],
        smbControls: [
          { tier: "Silver", color: "#6b7586", text: "No admin privileges for standard accounts", coverage: "Full" },
          { tier: "Silver", color: "#6b7586", text: "Individual user accounts", coverage: "Supports" }
        ],
        attackTechniques: ["Account Manipulation", "Brute Force", "Create Account", "Valid Accounts"]
      },
      {
        id: "VS.ZA.06",
        title: "Emergency Access",
        status: "pass",
        description: [
          "Emergency global admin accounts are set up to keep working through maximal system failure: bound to physical keys, locked away for very rainy days, and any use raises an alert."
        ],
        asdPrinciples: [
          { code: "PRO-13", text: "Identity, credential and access management", actions: "1 action" }
        ],
        smbControls: [
          { tier: "Platinum", color: "#3d7f96", text: "Remote access cloud credentials", coverage: "Supports" }
        ],
        attackTechniques: ["Brute Force", "Valid Accounts"]
      }
    ]
  },
  {
    title: "Execution Control",
    icon: "bi-terminal-x",
    status: "pass",
    controls: [
      {
        id: "VS.EC.01",
        title: "Application Whitelist",
        status: "pass",
        description: [
          "Antivirus chases: new malware is discovered and added to a list. App control puts you in charge, so you approve what is allowed to run and everything else is denied."
        ],
        asdPrinciples: [
          { code: "PRO-07", text: "Trustworthy software", actions: "2 actions" }
        ],
        smbControls: [
          { tier: "Diamond", color: "#5b67d1", text: "Application control", coverage: "Full" }
        ],
        attackTechniques: ["Command and Scripting Interpreter", "Impair Defenses", "Masquerading", "Process Injection", "System Binary Proxy Execution", "User Execution", "Windows Management Instrumentation"]
      },
      {
        id: "VS.EC.02",
        title: "Web Browser Security",
        status: "pass",
        description: [
          "Browser extensions are a critical path to your data, especially cloud services. Ad blocking is mandated and unapproved extensions are rejected."
        ],
        asdPrinciples: [
          { code: "PRO-07", text: "Trustworthy software", actions: "3 actions" },
          { code: "PRO-09", text: "Content filtering", actions: "1 action" }
        ],
        attackTechniques: ["Command and Scripting Interpreter", "Impair Defenses", "Implant Internal Image", "Ingress Tool Transfer", "Masquerading", "Phishing", "Process Injection", "Remote Services", "Supply Chain Compromise", "System Binary Proxy Execution", "Trusted Relationship", "User Execution", "Windows Management Instrumentation"]
      },
      {
        id: "VS.EC.03",
        title: "Cloud Application Approvals",
        status: "pass",
        description: [
          "Normal users cannot open doors into your cloud environment by installing or consenting to applications. Instead, they get a path to request admin approval for valid applications."
        ],
        asdPrinciples: [
          { code: "PRO-16", text: "Cyber supply chain security", actions: "1 action" },
          { code: "PRO-07", text: "Trustworthy software", actions: "1 action" }
        ],
        smbControls: [
          { tier: "Diamond", color: "#5b67d1", text: "Supplier digital trust programme", coverage: "Partial" }
        ],
        attackTechniques: ["Account Manipulation", "Steal Application Access Token", "Supply Chain Compromise", "Trusted Relationship", "Valid Accounts"]
      },
      {
        id: "VS.EC.04",
        title: "Office Protections",
        status: "pass",
        description: [
          "Documents and applications are boxed in. Office macros from the internet are blocked, Office apps can't launch other programs or inject code, scripts and email attachments can't run executables, and Windows exploit protection is switched on. Attacks that rely on someone opening a file have nowhere to go.",
          "Additionally 1.0.0.3 is used to enforce encrpyted DNS and C2 filtering"
        ],
        asdPrinciples: [
          { code: "PRO-04", text: "Secure configuration management", actions: "2 actions" },
          { code: "PRO-09", text: "Content filtering", actions: "2 actions" }
        ],
        smbControls: [
          { tier: "Diamond", color: "#5b67d1", text: "Disable untrusted Office macros", coverage: "Full" }
        ],
        attackTechniques: ["Application Layer Protocol", "Command and Scripting Interpreter", "Exfiltration Over Alternative Protocol", "Exfiltration Over C2 Channel", "Exfiltration Over Web Service", "Exploit Public-Facing Application", "External Remote Services", "Network Service Discovery", "OS Credential Dumping", "Phishing", "Proxy", "Server Software Component", "User Execution", "Windows Management Instrumentation"]
      },
      {
        id: "VS.EC.05",
        title: "Advanced Attack Defense",
        status: "pass",
        description: [
          "Adversaries love to use your own system against you. Vulnerable drivers are blocked, standard utilities can't be combined into attack tools (so called “living off the land”), stored credentials are shielded from theft, and legacy protocols such as SMBv1, NTLM and LLMNR are switched off. Even extremely capable attackers struggle to make a home in your environment."
        ],
        asdPrinciples: [
          { code: "DET-04", text: "Baselined high-risk access activities", actions: "1 action" },
          { code: "PRO-04", text: "Secure configuration management", actions: "1 action" }
        ],
        smbControls: [
          { tier: "Gold", color: "#9a7b00", text: "EDR (Diamond: EDR with MDR)", coverage: "Supports" }
        ],
        attackTechniques: ["Command and Scripting Interpreter", "Exploit Public-Facing Application", "External Remote Services", "System Binary Proxy Execution", "User Execution", "Valid Accounts"]
      },
      {
        id: "VS.EC.06",
        title: "Auto-Remediation",
        status: "pass",
        description: [
          "Problems fix themselves. Non-compliant devices, missing patches, malware detections and risky users are corrected by policy rather than by a ticket, while your MSP grows bored."
        ],
        asdPrinciples: [
          { code: "DET-02", text: "Cyber security event detection", actions: "1 action" },
          { code: "DET-04", text: "Baselined high-risk access activities", actions: "1 action" }
        ],
        smbControls: [
          { tier: "Gold", color: "#9a7b00", text: "EDR (Diamond: EDR with MDR)", coverage: "Partial" }
        ],
        attackTechniques: ["Command and Scripting Interpreter", "System Binary Proxy Execution", "Valid Accounts"]
      }
    ]
  },
  {
    title: "Hardened Environment",
    icon: "bi-shield-lock-fill",
    status: "pass",
    controls: [
      {
        id: "VS.HE.01",
        title: "Backups",
        status: "pass",
        description: [
          "Backups are automated, regularly tested, and cover both data and configuration. They stay out of reach even if your environment is compromised. It's too easy to ignore backups until you wish you had them."
        ],
        asdPrinciples: [
          { code: "PRO-10", text: "Regular and proven backups", actions: "8 actions" }
        ],
        smbControls: [
          { tier: "Bronze", color: "#9c5a24", text: "Backup and recovery", coverage: "Full" }
        ],
        attackTechniques: ["Data Destruction", "Data Encrypted for Impact", "Data Manipulation", "Data from Local System", "Inhibit System Recovery", "Service Stop"]
      },
      {
        id: "VS.HE.02",
        title: "Email Security",
        status: "pass",
        description: [
          "DMARC, SPF and DKIM: alphabet soup that keeps outsiders from sending mail that pretends to be from your company."
        ],
        asdPrinciples: [
          { code: "PRO-09", text: "Content filtering", actions: "2 actions" }
        ],
        smbControls: [
          { tier: "Silver", color: "#6b7586", text: "Email authentication (SPF, DKIM, DMARC)", coverage: "Full" }
        ],
        attackTechniques: ["Ingress Tool Transfer", "Phishing", "Remote Services", "User Execution"]
      },
      {
        id: "VS.HE.03",
        title: "Encryption",
        status: "pass",
        description: [
          "Encryption is enforced on every device, turning a lost or stolen laptop from a catastrophe into an inconvenience."
        ],
        asdPrinciples: [
          { code: "PRO-08", text: "Cryptographic protection", actions: "1 action" }
        ],
        smbControls: [
          { tier: "Diamond", color: "#5b67d1", text: "Encryption of important data at rest", coverage: "Partial" }
        ],
        attackTechniques: ["Adversary-in-the-Middle", "Data from Cloud Storage", "Network Sniffing"]
      },
      {
        id: "VS.HE.04",
        title: "Patch Management",
        status: "pass",
        description: [
          "What gets patched, and when, is defined and then enforced. Users are not left to their own schedule."
        ],
        asdPrinciples: [
          { code: "PRO-06", text: "Vulnerability management", actions: "4 actions" }
        ],
        smbControls: [
          { tier: "Bronze", color: "#9c5a24", text: "Automatic updates and patches", coverage: "Full" }
        ],
        attackTechniques: ["Exploit Public-Facing Application", "Exploitation for Client Execution", "Exploitation for Privilege Escalation", "Exploitation of Remote Services"]
      },
      {
        id: "VS.HE.05",
        title: "Tamper Protection",
        status: "pass",
        description: [
          "The settings in effect are the settings the business defined, not ad hoc changes of the moment. Security tooling cannot be switched off or quietly reconfigured, even by a local admin."
        ],
        asdPrinciples: [
          { code: "PRO-04", text: "Secure configuration management", actions: "2 actions" }
        ],
        smbControls: [
          { tier: "Bronze", color: "#9c5a24", text: "Antivirus on all devices", coverage: "Supports" },
          { tier: "Gold", color: "#9a7b00", text: "EDR (Diamond: EDR with MDR)", coverage: "Supports" }
        ],
        attackTechniques: ["Command and Scripting Interpreter", "Exploit Public-Facing Application", "External Remote Services", "Impair Defenses", "Modify Registry", "User Execution"]
      },
      {
        id: "VS.HE.06",
        title: "File Sharing",
        status: "pass",
        description: [
          "Files cannot leave the business by accident or in bulk. External sharing and anonymous links across SharePoint and OneDrive are restricted to what the business needs."
        ],
        asdPrinciples: [
          { code: "PRO-12", text: "Least privilege access", actions: "1 action" },
          { code: "PRO-09", text: "Content filtering", actions: "1 action" }
        ],
        attackTechniques: ["Account Manipulation", "Create Account", "Exfiltration Over Alternative Protocol", "Exfiltration Over C2 Channel", "Proxy"]
      }
    ]
  }
];