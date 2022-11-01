# Qwik qwik-svelte ⚡️

---

Qwik Svelte allows you to use Svelte components in an existing Qwik application.

---

## Example
https://github.com/raymondmuller/qwik-svelte-example

## Get Started

run npm install qwik-svelte inside your Qwik project<

Recommended Vite Config

- npm install @sveltejs/vite-plugin-svelte
- Add the vite plugin for Svelte
- Add the vite plugin for qwik-svelte (dedupes and optimizes svelte)
- Setting hydratable to true in the compiler options is required

#### e.g.

```
import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikSvelte } from "../vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      qwikSvelte(),
      svelte({
        compilerOptions: {
          accessors: true,
          hydratable: true,
        },
      }),
      tsconfigPaths(),
    ],
  };
});
```

---

## Related

- [Qwik Github](https://github.com/BuilderIO/qwik)
- [Sveltosis Github](https://github.com/sveltosis/sveltosis)
