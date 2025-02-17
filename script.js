document.addEventListener("DOMContentLoaded", () => {
    const serverIP = "spcfs.aternos.me"; // Change this to your actual server IP

    async function fetchPlayerCount() {
        try {
            const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
            const data = await response.json();

            if (data.online) {
                document.getElementById("playerCount").innerText = data.players.online;
            } else {
                document.getElementById("playerCount").innerText = "Server Offline";
            }
        } catch (error) {
            console.error("Error fetching player count:", error);
            document.getElementById("playerCount").innerText = "Error";
        }
    }

    fetchPlayerCount();
    setInterval(fetchPlayerCount, 30000); // Refresh every 30 seconds
});
