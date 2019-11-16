import actions from '../actions';

async function fetchMessegeAction() {
    const response = await fetch('../../api/v1/list');
    const messageList = await response.json();
    actions.addAction(messageList);
};

async function postMessegeAction(text, name) {
    const body = new FormData();
    body.append('name', name);
    body.append('value', text);
    const response = await fetch('../../api/v1/add', {
      method: 'POST',
      body
    });
    return await response.json();
}

const CounterActions = {
    fetchMessegeAction,
    postMessegeAction
};
  
export default CounterActions;