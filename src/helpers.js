export function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLS(key) {
  const item = localStorage.getItem(key);
  try {
    const parseItem = JSON.parse(item);
    return parseItem;
  } catch {
    return item;
  }
}
