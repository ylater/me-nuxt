import en from './en-US';
import cn from './zh-CN';
export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh' },
  { label: 'English', value: 'en' },
];
const defaultLocale = 'zh';
export default defineI18nConfig(() => ({
  legacy: false,
  locale: defaultLocale,
  messages: {
    'en': en,
    'zh': cn,
  },
}))