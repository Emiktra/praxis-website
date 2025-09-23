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
  HOME: 'Startseite',
  ABOUT: 'Über uns',
  SERVICES: 'Leistungen',
  CONTACT: 'Kontakt',
  APPOINTMENTS: 'Termine',
  IMPRESSUM: 'Impressum'
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  APPOINTMENTS: '/appointments',
  IMPRESSUM: '/impressium',
  DOCTORS: '/doctors',
  PRIMARY_DOC: '/doctors/' + STRINGS.DOCTOR_ID,
};

export const COLORS = {
  TEXT_DEFAULT: '#222222',
  TEXT_HOVER: '#ff9900',
  PRIMARY: '#6fa8dc',
  SECONDARY: '#82c0aa',
  BACKGROUND: '#f9f9f9',
  FOOTER_BG: '#e1e0e0ff',
  FOOTER_TEXT: '#ffffff',
  BORDER_COLOR: '#ddd',
  ASSET_BG: '#333',
};