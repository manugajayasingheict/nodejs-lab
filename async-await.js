async function myFunction() {
  try {
    const result = await Promise.resolve("Success!");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();