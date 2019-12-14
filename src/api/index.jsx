const tetsudo = 'https://tetsudo.rti-giken.jp/free/delay.json';

const fetchMessegeAction = async () => {
    const local = 'http://localhost:8000/api/v1/list';
    const response = await fetch(local, {
      mode: 'cors',
      method: 'GET'
    }).catch(err => console.log(`'${err}'【GET】`));
    return await response.json();
};

const postMessegeAction = async (text, name) => {
    const local = 'http://localhost:8000/api/v1/add';
    const body = new FormData();
    body.append('name', name);
    body.append('value', text);
    await fetch(local, {
      mode: 'cors',
      method: 'POST',
      body
    }).catch(err => console.log(`'${err}'【POST】`));
}

const CounterActions = {
    fetchMessegeAction,
    postMessegeAction
};
  
export default CounterActions;