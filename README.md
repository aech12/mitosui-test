
# Mitosis based UI library

Components made with Mitosis and Tailwind and tested with Storybook, for multiple JS frameworks.

## How to use this library

## How to contribute

### Process outlook
The components are styled with Tailwind and compiled with Mitosis. Storybook is used for testing on the compiled React components.

### Step by step
1 - Write a component placed in src/components as COMPONENT.lite.tsx and style it with Tailwind

2 - Compile the component with
> pnpm exec mitosis compile -t react src/components/COMPONENT.lite.tsx -o=output/COMPONENT.tsx --force
or compile all components with
> pnpm run compile-mitosis

3 - Create a .stories.js that imports the generated component so you can test it with Storybook

4 - To preview the components run
> pnpm run storybook

Final version of components goes in src/final-components

