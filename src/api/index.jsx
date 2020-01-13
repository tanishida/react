import config from '../config';

const fetchMessegeAction = async () => {
    const response = await fetch(config.GET_LOCAL, {
      mode: 'cors',
      method: 'GET'
    }).catch(err => console.log(`'${err}'【GET】message`));
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
    }).catch(err => console.log(`'${err}'【POST】message`));
}

const fetchGotandaRegistAction = async () => {
  const response = await fetch(config.GET_GOTANDA_REGIST_LOCAL, {
    mode: 'cors',
    method: 'GET'
  }).catch(err => console.log(`'${err}'【GET】gotanda regist`));
  return await response.json();
};

const postGotandaRegistAction = async (handleName, shopName, date, radio, comment) => {
  const body = new FormData();
  body.append('handleName', handleName);
  body.append('shopName', shopName);
  body.append('date', date);
  body.append('radio', radio);
  body.append('comment', comment);
  await fetch(config.POST_GOTANDA_REGIST_LOCAL, {
    mode: 'cors',
    method: 'POST',
    body
  }).catch(err => console.log(`'${err}'【POST】gotanda regist`));
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
    getAuthorization,
    postGotandaRegistAction,
    fetchGotandaRegistAction
};
  
export default CounterActions;