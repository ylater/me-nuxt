import en from './en-US';
import cn from './zh-CN';
export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
];
const defaultLocale = 'zh-CN';
export default defineI18nConfig(nuxt => ({
  legacy: false,
  locale: defaultLocale,
  messages: {
    'en-US': en,
    'zh-CN': cn,
  },
}))