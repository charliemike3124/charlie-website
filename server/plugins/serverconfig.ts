export default defineNitroPlugin((nitroApp) => {
    console.log("Fetching language from firebase.");
    nitroApp.localFetch("/api/storage", {
        method: "Post",
    });
});
