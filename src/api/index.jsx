import config from '../config';

const fetchMessegeAction = async () => {
    const response = await fetch(config.GET_LOCAL, {
      mode: 'cors',
      method: 'GET'
    }).catch(err => console.log(`'${err}'【GET】`));
    return await response.json();
};

const postMessegeAction = async (text, name) => {
    const body = new FormData();
    body.append('name', name);
    body.append('value', text);
    await fetch(config.POST_LOCAL, {
      mode: 'cors',
      method: 'POST',
      body
    }).catch(err => console.log(`'${err}'【POST】`));
}

const getAuthorization = async (accessToken) => {
  const ACCESS_TOKEN = accessToken.slice(14);
  let body = new FormData();
  body.append('token', ACCESS_TOKEN);
  const response = await fetch(config.GET_LOCAL2, {
    mode: 'cors',
    method:'POST',
    body
  }).catch(err => console.log(`'${err}'【GET】`));
}

const CounterActions = {
    fetchMessegeAction,
    postMessegeAction,
    getAuthorization
};
  
export default CounterActions;