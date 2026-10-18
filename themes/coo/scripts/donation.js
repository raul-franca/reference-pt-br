// Configuração de doações e funções auxiliares

const donationConfig = {
  github: {
    url: 'https://github.com/sponsors/Fechin',
    enabled: true
  },
  buymeacoffee: {
    url: 'https://buymeacoffee.com/fechin',
    enabled: true
  },
  kofi: {
    url: 'https://ko-fi.com/fechin',
    enabled: true
  },
  paypal: {
    url: 'https://paypal.me/fechinli',
    enabled: true
  }
};

// Função auxiliar para obter as URLs de doação
hexo.extend.helper.register('donation_link', function (platform) {
  const config = donationConfig[platform];
  if (config && config.enabled) {
    return config.url;
  }
  return '#';
});

// Função auxiliar para verificar se as doações estão ativas
hexo.extend.helper.register('donations_enabled', function () {
  return Object.values(donationConfig).some((config) => config.enabled);
});

// Função auxiliar para obter todas as plataformas de doação ativas
hexo.extend.helper.register('enabled_donations', function () {
  return Object.entries(donationConfig)
    .filter(([platform, config]) => config.enabled)
    .map(([platform, config]) => ({
      platform,
      url: config.url
    }));
});
