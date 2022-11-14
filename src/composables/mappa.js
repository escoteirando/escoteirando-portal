let lastHC = new Date(0)
let lastHCData = null

export function useMappa () {
  const mappaUrl = 'https://mappa-proxy.fly.dev'


  function getHC () {
    return new Promise(async (resolve) => {
      if (lastHCData && lastHC > new Date() - 1000 * 60 * 5) {
        console.debug("getHC: cached data", lastHCData)
        resolve(lastHCData.status == "HEALTHY" ? "OK" : lastHCData.mappa_server.status)
        return
      }

      fetch(`${mappaUrl}/hc`)
        .then((response) => response.json())
        .then(
          (data) => {
            lastHC = new Date()
            lastHCData = data
            console.debug("getHC: got data", data)
            resolve(data.status == "HEALTHY" ? "OK" : data.mappa_server.status)
          }
        )
        .catch(() => (resolve("ERROR")));
    });
  }

  /**
   * Login response
   * {
  "created": "string",
  "id": "string",
  "ttl": 0,
  "userId": 0
}
  */
  function login (username, password) {
    return new Promise(async (resolve, reject) => {
      fetch(`${mappaUrl}/mappa/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
        .then((response) => response.json())
        .then(
          (data) => {
            resolve(data)
          }
        )
        .catch(() => (reject("ERROR")));
    })
  }

  return {
    getHC,
    login
  }
}
