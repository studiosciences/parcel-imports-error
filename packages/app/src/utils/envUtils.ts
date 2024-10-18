export function isDev() {
  return (
    window.location.href.includes("dev.sndk.io") ||
    window.location.href.includes("sundeck.ninja")
  );
}

export function isStage() {
  return window.location.href.includes("stage.sndk.io");
}

export function isProd() {
  return window.location.href.includes("prod.sndk.io");
}
