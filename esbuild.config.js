import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["./src/index.ts"], // Adjust this to your entry point
  bundle: true,
  outfile: "./dist/bundle.js",
  target: "es6", // Set your target environment here
  platform: "node", // Adjust based on your environment
}).catch(() => process.exit(1));