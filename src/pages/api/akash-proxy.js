export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.cloudmos.io/v1/dashboard-data");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Akash data:", error);
    res.status(500).json({ error: "Failed to fetch Akash data" });
  }
}
