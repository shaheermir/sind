async function loadMonstersApi() {
  await sleep(2000)
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  return response.json()
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export { loadMonstersApi }
