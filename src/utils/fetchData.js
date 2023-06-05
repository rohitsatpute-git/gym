export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '9c471d0b71msh6c109b0f7d24ae2p16196ejsnbc96ebf801ad',
  }
}

export const youtubeOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': '9c471d0b71msh6c109b0f7d24ae2p16196ejsnbc96ebf801ad',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
