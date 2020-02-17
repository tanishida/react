import config from '../config';

const fetchMessegeAction = async () => {
    const response = await fetch(config.GET_AWS, {
      mode: 'cors',
      method: 'GET'
    }).catch(err => console.log(`'${err}'【GET】message`));
    return await response.json();
};

const postMessegeAction = async (text, name) => {
    const body = new FormData();
    body.append('name', name);
    body.append('value', text);
    await fetch(config.POST_AWS, {
      mode: 'cors',
      method: 'POST',
      body
    }).catch(err => console.log(`'${err}'【POST】message`));
}

const fetchGotandaRegistAction = async () => {
  const response = await fetch(config.GET_GOTANDA_REGIST_AWS, {
    mode: 'cors',
    method: 'GET'
  }).catch(err => console.log(`'${err}'【GET】gotanda regist`));
  return await response.json();
};

const postGotandaRegistAction = async (handleName, shopName, date, radio, comment, password) => {
  const body = new FormData();
  body.append('handleName', handleName);
  body.append('shopName', shopName);
  body.append('date', date);
  body.append('radio', radio);
  body.append('comment', comment);
  body.append('password', password);
  await fetch(config.POST_GOTANDA_REGIST_AWS, {
    mode: 'cors',
    method: 'POST',
    body
  }).catch(err => console.log(`'${err}'【POST】gotanda regist`));
}

const CounterActions = {
    fetchMessegeAction,
    postMessegeAction,
    postGotandaRegistAction,
    fetchGotandaRegistAction
};
  
export default CounterActions;