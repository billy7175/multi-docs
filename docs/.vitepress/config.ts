import { defineConfig } from 'vitepress'

// Using a more stable configuration structure
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: false, // Disable Git-based last updated feature

  markdown: {
    container: {
      react: {
        render: (tokens, idx) => tokens[idx].nesting === 1
          ? `<div class="custom-container react"><span class="icon">⚛️</span>\n`
          : '</div>\n'
      },
      vue: {
        render: (tokens, idx) => tokens[idx].nesting === 1
          ? `<div class="custom-container vue"><span class="icon">🟢</span>\n`
          : '</div>\n'
      },
      network: {
        render: (tokens, idx) => tokens[idx].nesting === 1
          ? `<div class="custom-container network"><span class="icon">🌐</span>\n`
          : '</div>\n'
      },
      python: {
        render: (tokens, idx) => tokens[idx].nesting === 1
          ? `<div class="custom-container python"><span class="icon">🐍</span>\n`
          : '</div>\n'
      },
      java: {
        render: (tokens, idx) => tokens[idx].nesting === 1
          ? `<div class="custom-container java"><span class="icon">☕</span>\n`
          : '</div>\n'
      },
      cpp: {
        render: (tokens, idx) => tokens[idx].nesting === 1
          ? `<div class="custom-container cpp"><span class="icon">⚙️</span>\n`
          : '</div>\n'
      },
      javascript: {
        render: (tokens, idx) => tokens[idx].nesting === 1
          ? `<div class="custom-container javascript"><span class="icon">📜</span>\n`
          : '</div>\n'
      },
      typescript: {
        render: (tokens, idx) => tokens[idx].nesting === 1
          ? `<div class="custom-container typescript"><span class="icon">🔷</span>\n`
          : '</div>\n'
      },
      rust: {
        render: (tokens, idx) => tokens[idx].nesting === 1
          ? `<div class="custom-container rust"><span class="icon">🦀</span>\n`
          : '</div>\n'
      },
      go: {
        render: (tokens, idx) => tokens[idx].nesting === 1
          ? `<div class="custom-container go"><span class="icon">🐹</span>\n`
          : '</div>\n'
      }
    }
  },

  themeConfig: {
    nav: [
      {
        text: 'Development',
        items: [
          { text: 'React', link: '/development/react/' },
          { text: 'Vue', link: '/development/vue/' },
          { text: 'Network', link: '/development/network/' }
        ]
      },
      {
        text: 'Design',
        items: [
          { text: 'UI Components', link: '/design/ui-components/' },
          { text: 'Color System', link: '/design/colors/' }
        ]
      },
      {
        text: 'DevOps',
        items: [
          { text: 'CI/CD', link: '/devops/cicd/' },
          { text: 'Docker', link: '/devops/docker/' }
        ]
      }
    ],

    sidebar: {
      '/development/react/': [
        {
          text: 'React',
          items: [
            { text: 'Getting Started', link: '/development/react/' },
            { text: 'Hooks', link: '/development/react/hooks' },
            { text: 'State Management', link: '/development/react/state' }
          ]
        }
      ],
      '/development/vue/': [
        {
          text: 'Vue',
          items: [
            { text: 'Getting Started', link: '/development/vue/' },
            { text: 'Composition API', link: '/development/vue/composition' },
            { text: 'State Management', link: '/development/vue/state' }
          ]
        }
      ],
      '/development/network/': [
        {
          text: 'Network',
          items: [
            { text: 'Overview', link: '/development/network/' },
            { text: 'REST APIs', link: '/development/network/rest' },
            { text: 'GraphQL', link: '/development/network/graphql' }
          ]
        }
      ]
    }
  }
})