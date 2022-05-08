

export function validateUser(token) {
  // const validateUrl = `https://q3gyo2n1wj.execute-api.us-east-1.amazonaws.com/latest/validatejwt?token=${token}`;
  const validateUrl = `${process.env.REACT_APP_VALIDATE_JWT_URL}${token}`;
  return fetch(validateUrl).then((data) => data.json());
}

export function getCurrentUser() {
  return localStorage.getItem('token');
}

export function setCurrentUser(token) {
  localStorage.setItem('token', token);
}