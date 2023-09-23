export default async function IncidentsComponent() {
  const data = await fetch("/api/incident");
  console.log("data", data);
  return <h3>no incidents: {data?.length || 0}</h3>;
}
