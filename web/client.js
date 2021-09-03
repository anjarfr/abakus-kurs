import client from "@sanity/client";

export default client({
  projectId: "lozz570n",
  dataset: "production",
  useCdn: true, // false hvis man alltid vil ha oppdatert data
});
