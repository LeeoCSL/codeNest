import { theme } from 'antd';

export const getAntTheme = (viewMode) => ({
  algorithm: viewMode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    colorPrimary: '#722ed1',
    colorBgContainer: viewMode === 'dark' ? '#141414' : '#ffffff',
    colorText: viewMode === 'dark' ? '#ffffff' : '#000000',
    colorTextHeading: viewMode === 'dark' ? '#ffffff' : '#000000',
    colorBorder: viewMode === 'dark' ? '#303030' : '#d9d9d9',
    borderRadius: 8,
  },
});