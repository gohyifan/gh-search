const axios = require('axios');

async function handler(req, res) {
  const {
    query: { qid },
  } = req
  const response = await axios.get('https://api.github.com/search/repositories', {
    params: {
      q: qid
    }
  });
  if (response) {
    res.status(200).json(response.data);
  } else {
    res.sendStatus(500);
  }
}
q
export default handler;
