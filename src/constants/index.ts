import mainLogo from '@/assets/main_logo.svg';
import heroBg from '@/assets/hero_background.jpg';
import doctorPortrait from '@/assets/doctor_portrait.jpg';
import teamMemberPortrait from '@/assets/team_member_portrait.jpg';

export const ASSETS = {
  MAIN_LOGO: mainLogo,
  HERO_BG: heroBg,
  DOCTOR_PORTRAIT: doctorPortrait,
  TEAM_MEMBER_PORTRAIT: teamMemberPortrait,
};

export const STRINGS = {
  PRAXIS_NAME: 'Praxis Yasemin Akkoca',
  COPYRIGHT: '© 2025',
  DOCTOR_NAME: 'Yasemin Akkoca',
  DOCTOR_ID: 'yasemin_akkoca',
  PHONE_NUM: '02191 696 64 90',
  ADDRESS: 'Eisernsteinstraße 16, 42899 Remscheid',
  STREET: 'Eisernsteinstraße 16',
  CITY: '42899 Remscheid',
  EMAIL: 'praxis.akkoca@t-online.de',
  HOME: 'Startseite',
  ABOUT: 'Über uns',
  SERVICES: 'Leistungen',
  CONTACT: 'Kontakt',
  APPOINTMENTS: 'Termine',
  IMPRESSIUM: 'Impressum',
  PRIVACY_POLICY: 'Datenschutz',
  OPENING_HOURS: 'Öffnungszeiten',
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  APPOINTMENTS: '/appointments',
  IMPRESSUM: '/impressium',
  PRIVACY_POLICY: 'privacy_policy',
  DOCTORS: '/doctors',
  PRIMARY_DOC: '/doctors/' + STRINGS.DOCTOR_ID,
};

export const COLORS = {
  TEXT_DEFAULT: '#222',
  TEXT_HOVER: '#ff9900',
  LINK: '#deedffff',
  LINK_DARK: '#4b9af9ff',
  SECONDARY: '#82c0aa',
  BACKGROUND: '#f5f5f5',
  BACKGROUND_ALT: '#e0e0e0',
  FOOTER_BG: '#222',
  FOOTER_TEXT: '#fff',
  BORDER_COLOR: '#ddd',
  ASSET_BG: '#333',
};