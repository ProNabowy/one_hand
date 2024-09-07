/**
 * Sets a secure cookie with the specified name, value, and expiration date.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {number} daysToExpire - The number of days until the cookie expires.
 * @param {string} [sameSite='Strict'] - The same-site attribute for the cookie.
 *
 * @returns {void}
 */
function setSecureCookie(name, value, daysToExpire, sameSite = 'Strict') {
    // Create a new Date object and set it to the current date/time
    const date = new Date();
    // Set the expiration date by adding the specified number of days to the current date/time
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    // Convert the expiration date to a string in the format required for the cookie
    const expires = `expires=${date.toUTCString()}`;
    // Determine whether to set the secure attribute on the cookie based on the current protocol
    const secure = location.protocol === 'https:' ? 'Secure' : '';
    // Create the cookie string with the specified name, value, expiration date, path, secure attribute, and same-site attribute
    const cookieString = `${name}=${value}; ${expires}; path=/; ${secure}; SameSite=${sameSite}`;
    // Set the cookie on the document
    document.cookie = cookieString;
}

/**
 * Retrieves the value of a cookie by its name.
 *
 * @param {string} name - The name of the cookie.
 * @return {string|null} The value of the cookie, or null if the cookie does not exist.
 */
function getCookie(name) {
    // Split the document.cookie string into an array of cookies
    const cookies = document.cookie.split(';');

    // Iterate over each cookie
    for (const cookie of cookies) {
        // Split the cookie into its name and value and trim any leading/trailing whitespace
        const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());

        // Check if the cookie name matches the specified name
        if (cookieName === name) {
            // Return the cookie value
            return cookieValue;
        }
    }

    // Return null if the cookie does not exist
    return null;
}

const loggedIn = () => {
    return getCookie('token') ? true : false;
}

const handleLogOut = () => {

    window.localStorage.clear();

    setSecureCookie('token', null, -1);

    return window.location.href = '/';
}



export {
    setSecureCookie,
    getCookie,
    loggedIn,
    handleLogOut
}