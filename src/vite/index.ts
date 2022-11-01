export function qwikSvelte(): any {
  const OPTIMIZE_DEPS = ["svelte"];
  const DEDUPE = ["svelte"];

  return {
    name: "vite-plugin-qwik-svelte",
    config() {
      return {
        resolve: {
          dedupe: DEDUPE,
        },
        optimizeDeps: {
          include: OPTIMIZE_DEPS,
        },
      };
    },
  };
}
