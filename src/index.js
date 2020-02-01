const graphqlUri = document.currentScript.getAttribute("graphqlUri");
const siteId = document.currentScript.getAttribute("siteId");
const userAgent = navigator.userAgent;
const referrer = document.referrer;
const language = navigator.language;
const body = JSON.stringify({
  query: `mutation {
        addSession(
          siteId: "${siteId}",
          userAgent: "${userAgent}",
          referrer: "${referrer}",
          language: "${language}") {
            siteId
          }
      }
  `
});

fetch(graphqlUri, {
  headers: { "content-type": "application/json" },
  method: "POST",
  body
});
