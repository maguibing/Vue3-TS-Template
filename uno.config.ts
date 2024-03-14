import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        // 'vertical-align': 'middle',
      },
      warn: true,
      prefix: ['i-'],
    }),
    presetRemToPx({ baseFontSize: 4 }),
  ],
  shortcuts: [['wh-full', 'w-full h-full']],
})
