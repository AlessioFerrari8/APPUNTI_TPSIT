# Tailwind CSS
Tailwind CSS is a CSS framework that provides utility-first CSS classes to build custom designs without leaving your HTML. It allows for rapid prototyping and development by using pre-defined classes.

# Tailwind CSS: example
```html
<div class="flex flex-col items-center gap-6 p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
  </div>
  <div class="flex items-center">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
```

For example the first class has `flex` which applies `display: flex;`, the second class `flex-col` applies `flex-direction: column;`, and so on. This allows for a highly customizable design without writing custom CSS.