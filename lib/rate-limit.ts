const WINDOW_SIZE = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10; // max requests per window

const requests = new Map<string, number[]>();

export async function rateLimit(identifier: string) {
  const now = Date.now();
  const windowStart = now - WINDOW_SIZE;
  
  // Get existing requests and filter out old ones
  const userRequests = (requests.get(identifier) || [])
    .filter(timestamp => timestamp > windowStart);
  
  if (userRequests.length >= MAX_REQUESTS) {
    return { success: false };
  }
  
  // Add new request
  userRequests.push(now);
  requests.set(identifier, userRequests);
  
  return { success: true };
}