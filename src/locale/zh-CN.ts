import localeMessageBox from '@/components/message-box/locale/zh-CN';

import localeIndex from '@/views/index/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.arcoWebsite': 'Arco Design',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeMessageBox,
  ...localeIndex,
};
