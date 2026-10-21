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

export const controls = [
    {
        icon: 'key',
        name: 'Phishing resistant Authentication',
        line: 'No passwords left to steal.',
        text: 'Staff sign in with passkeys tied to their device, so there is no password to phish, reuse or leak.',
        outcome: 'Removes one of the most common causes of account compromise.',
    },
    {
        icon: 'admin',
        name: 'Protected Administration',
        line: 'No permanent administrator access.',
        text: 'Admin rights are granted for an approved task and removed automatically when the task is done.',
        outcome: 'Limits the damage any single compromised account can do.',
    },
    {
        icon: 'monitor',
        name: 'Session Protection',
        line: 'Non-compliant access is blocked, not flagged.',
        text: "Every sign-in is checked against policy for device, location and risk. If it doesn't meet policy, access is denied rather than raising an alert for someone to review later. Browser sessions are hardened against token theft.",
        outcome: 'Consistent enforcement, with no quiet exceptions.',
    },
    {
        icon: 'terminal',
        name: 'Execution Control',
        line: 'Only approved software runs.',
        text: 'Applications are explicitly allowed. Anything not on the list is blocked before it runs, including the unapproved programs ransomware commonly relies on.',
        outcome: 'Closes off one of the most common ways ransomware takes hold.',
    },
    {
        icon: 'database',
        name: 'Immutable Recovery',
        line: "Backups cannot be modified, deleted or encrypted by attackers",
        text: "Backups are stored so they can't be altered or deleted during their retention period, and recovery is tested against agreed recovery objectives.",
        outcome: 'A known, tested path back after an incident.',
    },
];
