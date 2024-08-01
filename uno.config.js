import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        width: '1.8em',
        height: '1.8em',
        display: 'inline-block',
      },
      collections: {
        custom: {
          capacitor: '<svg width="256px" height="256px"><g><polygon fill="#53B9FF" points="39.8626133 54.11456 0.310594133 93.71648 61.30624 154.894933 0 216.385067 39.4282667 256.004267 100.858027 194.497067 161.9552 255.5648 201.5072 215.962667"></polygon><polygon fill="#119EFF" points="140.517333 154.896 100.859413 194.497067 161.956267 255.565867 201.508267 215.963733"></polygon><polygon fill-opacity="0.2" fill="#000000" points="140.517333 154.896 100.859413 194.497067 116.125867 209.678933"></polygon><polygon fill="#53B9FF" points="194.5696 100.985173 256 39.4779733 216.430933 0 155.018667 61.3835733 93.9165867 0.310993067 54.3645867 39.91296 216.0096 201.761067 255.5616 162.158933"></polygon><polygon fill="#119EFF" points="115.36 100.986773 155.018667 61.3850667 93.9165867 0.312500267 54.3645867 39.9144533"></polygon><polygon fill-opacity="0.2" fill="#000000" points="115.358933 100.985387 155.0176 61.3837867 139.7472 46.1978667"></polygon></g></svg>',
        },
      },
    }),
    presetAttributify(),
  ],
})
