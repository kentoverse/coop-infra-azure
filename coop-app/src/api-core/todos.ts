// app/api/todos.ts
export async function getTodos() {
  const res = await fetch('https://YOUR_BACKEND_URL/api/todos');
  return res.json();
}
