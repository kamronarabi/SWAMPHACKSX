import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://youtube-mp36.p.rapidapi.com/dl',
    params: {id:""},
    headers: {
      'x-rapidapi-key': '0a870f25demshafe084fe83e309dp134fbajsncb0aac2d7cb3',
      'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
    }
  };
  
  

const fetch = async (id)=> {
    options.params.id = {id}
    const response = await axios.request(options)
    return response;
}

export {fetch}