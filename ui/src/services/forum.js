export function getForums() {
  return fetch(
    "https://q3gyo2n1wj.execute-api.us-east-1.amazonaws.com/latest/forum"
  ).then((data) => data.json());
}
