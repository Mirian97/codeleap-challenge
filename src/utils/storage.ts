export const setItem = (key: string, value: string | object) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key: string) => {
  const storage = localStorage.getItem(key)
  if (storage === null) return
  return JSON.parse(storage)
}

export const removeItem = (key: string) => {
  localStorage.removeItem(key)
}

export const clearAll = () => {
  localStorage.clear()
}
