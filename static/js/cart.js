const updateButtons = document.querySelectorAll('.update-cart');

function addCookieItem(id, action) {
  if(action == 'add') {
    if(cart[id] == undefined) {
      cart[id] = {
        'quantity': 1
      }
    }
    else cart[id]['quantity'] += 1
  }

  if(action == 'minus') {
    cart[id]['quantity'] -= 1

    if(cart[id]['quantity'] <= 0) delete cart[id]
  }

  if(action == 'remove') {
    cart[id]['quantity'] = 0

    if(cart[id]['quantity'] <= 0) delete cart[id]
  }
  document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/"
  location.reload()
}

function updateUserOrder(id, action) {
  const url = '/update_item';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
    },
    body: JSON.stringify({
      'id': id,
      'action': action
    })
  })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    location.reload()
  })
};

for (let i = 0; i < updateButtons.length; i++) {
  updateButtons[i].addEventListener('click', function() {
    const photocardId = this.dataset.photocard;
    const action = this.dataset.action;

    if(user == 'AnonymousUser') addCookieItem(photocardId, action);
    else updateUserOrder(photocardId, action);
  })
};

const item = document.querySelector('#cart-item')
const checkoutBtn = document.querySelector('.checkout-btn')

if(!item) checkoutBtn.classList.add('hide-checkout-btn')
  