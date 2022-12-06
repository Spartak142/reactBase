//Function 5
//Testing: https://jestjs.io/docs/asynchronous
export async function fetchData() {
  const response = await fetch("https://api.github.com/users/pjhyett");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);

  return { data };
}
fetchData();
