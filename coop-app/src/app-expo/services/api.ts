import config from '@/config';

export async function getTodos() {
  try {
    const response = await fetch(`${config.api.baseUrl}/todos`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}