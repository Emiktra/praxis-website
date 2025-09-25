import mainLogo from '@/assets/main_logo.svg';
import heroBg from '@/assets/hero_background.jpg';
import doctorPortrait from '@/assets/doctor_portrait.jpg';
import teamMemberPortrait from '@/assets/team_member_portrait.jpg';
import servicesBg from '@/assets/services_background.jpg';

export const ASSETS = {
  MAIN_LOGO: mainLogo,
  HERO_BG: heroBg,
  SERVICES_BG: servicesBg,
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
  LOCATION_EMBED: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.2958655367142!2d7.23738097697534!3d51.21362513212152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b929b537ead431%3A0xd3ea52a6b53866b8!2sPraxis%20Yasemin%20Akkoca!5e0!3m2!1sde!2sde!4v1758834172836!5m2!1sde!2sde',

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