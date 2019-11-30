
const getClassrooms = async () => {
    console.log("I AM HERE");
  const URI = "http://10.1.1.92:3000/";
  try {
    const response = await fetch(URI, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    });
    console.log("----------", response);
    if (response.status === 200) {
      return response.json();
    }

  } catch (err) {
        console.log("i Am hereeeeee");
        console.error(err);
  }
};

export default getClassrooms;
