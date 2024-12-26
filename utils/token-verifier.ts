/**
 * Checks if a JWT token is expired.
 * @param token - The JWT token to validate.
 * @returns A boolean indicating if the token is expired.
 */
export const isTokenExpired = (token: string): boolean => {
  try {
    // Decode the token without verifying (Base64 URL decoding)
    const payload = JSON.parse(atob(token.split(".")[1]));

    // Check if the 'exp' field exists in the payload
    if (!payload.exp) {
      throw new Error("Token does not have an expiration field.");
    }

    // Get the current time in seconds
    const currentTime = Math.floor(Date.now() / 1000);

    // Return true if the token is expired
    return currentTime > payload.exp;
  } catch (error) {
    console.error("Invalid token:", error);
    return true; // Assume the token is expired if there's an error
  }
};
