
const getClassrooms = async () => {
    console.log("I AM HERE");
  const URI = "http://192.168.16.6:3000/getClassrooms";
  try {
    const response = await fetch(URI, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    });
    console.log("waiting for response");
    res = await response.json();
    console.log(res);
    if (response.status === 200) {
      return res;
    }

  } catch (err) {
    console.error(err);
  }
};

const getConsumption = async () => {
  const URI = "http://192.168.16.6:3000/getEnergyConsumption";
  try {
    const response = await fetch(URI, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    });
    console.log("waiting for response");
    res = await response.json();
    console.log(res);
    if (response.status === 200) {
      return res;
    }

  } catch (err) {
    console.error(err);
  }
};


export default getClassrooms;
