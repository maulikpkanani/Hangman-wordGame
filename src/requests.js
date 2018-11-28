const getPuzzle = async wordCount => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();

    return data.puzzle;
  } else {
    throw new Error('Unable to ge the puzzle data');
  }
};

//

const getCurrentContry = async () => {
  const location = await getLocation();
  return getcountry(location.country);
};

const getCountry = async countryCode => {
  let response = await fetch('//restcountries.eu/rest/v2/all');
  if (response.status === 200) {
    const data = await response.json();
    return data.find(country => country.alpha2Code === countryCode);
  } else {
    throw new Error('unable to fetch the country code');
  }
};

//

const getLocation = async () => {
  let response = await fetch('//ipinfo.io/json?token = 47946f2d7d4d3b');
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Unbale to locate you');
  }
};

export { getPuzzle as default };
