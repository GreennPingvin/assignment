export function serializeMap(key, map) {
  sessionStorage.setItem(key, JSON.stringify(Array.from(map.entries())))
}

export function deserializeMap(key) {
  if (!sessionStorage.getItem(key)) {
    return new Map()
  }
  return new Map(JSON.parse(sessionStorage.getItem(key)))
}
