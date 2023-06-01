export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
  }
}

export const youtubeOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': '8374352490msh0bfad092455b7e4p117e86jsn08fae4eb1b9a',
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_KEY
  }
};


  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
