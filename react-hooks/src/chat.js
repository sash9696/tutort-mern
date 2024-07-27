// real implentation should be like connecting to chat server

export function createNewConnection(serverUrl, roomId) {
  return {
    connect() {
      console.log(`✅ Connecting to ${roomId} room at ${serverUrl}...`);
    },
    disconnect() {
      console.log(`❌  Disconnected from ${roomId} room at ${serverUrl}`);
    },
  };
}
