export const NavMenu = [
    { name: 'Home', href: '/', current: true },
    {
        name: 'About us', href: '', current: false, subItems: [
            { name: `Chairman's Message`, href: '/chairman-message', current: false },
            { name: 'Our Team', href: '/our-team', current: false },
            { name: 'About Ubiquity', href: '/about-us', current: false }
        ]
    },
    {
        name: 'Awards & Recognitions', href: '', current: false, subItems: [
            { name: `Government Partners`, href: '/approvals-and-collabrations/government-partnership', current: false },
            { name: `Placement Partners`, href: '/approvals-and-collabrations/placement-tie-ups', current: false },
            { name: `Industry Partners`, href: '/approvals-and-collabrations/industry-tie-ups', current: false },
            { name: `Our  Approvals`, href: '/approvals-and-collabrations/approvals', current: false },
        ]
    },
    {
        name: 'Our services', href: '', current: false, subItems: [
            { name: `Projects`, href: '/our-projects', current: false },
            { name: 'Our Expertise', href: '/our-expertise', current: false },
        ]
    },

    { name: 'Contact Us', href: '/contact-us', current: false },
];
