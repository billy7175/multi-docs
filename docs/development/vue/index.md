# Vue Development

Welcome to the Vue documentation section! Here you'll find everything you need to know about Vue development.

:::tip 💡 Quick Tip
The Composition API provides better TypeScript support and code organization.
:::

## Component Examples

### Vue Components
::: code-group
```vue [Options API]
<template>
  <div class="container">
    <h1>{{ greeting }}</h1>
    <p>Welcome to our documentation.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello Vue!'
    }
  }
}
</script>
```

```vue [Composition API]
<template>
  <div class="container">
    <h1>{{ greeting }}</h1>
    <p>Welcome to our documentation.</p>
  </div>
</template>

<script setup>
const greeting = 'Hello Vue!'
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
```
:::

:::warning ⚠️ Note
Make sure to use the `scoped` attribute in component styles to prevent CSS leaks.
:::

## Core Concepts

| Concept | Description |
|---------|-------------|
| Reactivity | Automatic UI updates when data changes |
| Components | Reusable and modular UI pieces |
| Templates | HTML-based syntax with directives |
| Routing | Built-in routing system for SPAs |

:::info 📚 Learn More
Check out the [official Vue documentation](https://vuejs.org/) for detailed guides and API references.
:::