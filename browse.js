// browse.js

// Called when user clicks "Request Swap"
function requestSwap(itemId) {
  const token = localStorage.getItem('token');

  if (!token) {
    alert("Token missing. Cannot request swap.");
    return;
  }

  fetch('http://localhost:5000/api/swaps/request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ itemId })
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      alert("Swap Failed: " + data.error);
    } else {
      alert("✅ Swap request sent successfully!");
      console.log(data);
    }
  })
  .catch(err => {
    console.error(err);
    alert("❌ Error sending swap request.");
  });
}

// Called when user clicks "Redeem via Points"
function redeemItem(itemId) {
  const token = localStorage.getItem('token');

  if (!token) {
    alert("Token missing. Cannot redeem item.");
    return;
  }

  fetch('http://localhost:5000/api/swaps/redeem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ itemId })
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      alert("Redeem Failed: " + data.error);
    } else {
      alert("🎉 Item redeemed successfully via points!");
      console.log(data);
    }
  })
  .catch(err => {
    console.error(err);
    alert("❌ Error redeeming item.");
  });
}
