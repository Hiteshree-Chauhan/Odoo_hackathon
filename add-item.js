// add-item.js

document.getElementById('addItemForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const token = localStorage.getItem('token');
  if (!token) {
    alert("⚠️ You're not logged in.");
    return;
  }

  const form = e.target;
  const formData = new FormData(form);

  const fileInput = document.getElementById('image');
  const imageFile = fileInput.files[0];

  formData.append('image', imageFile);

  try {
    const response = await fetch('http://localhost:5000/api/items/add', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    const result = await response.json();

    if (response.ok) {
      alert("✅ Item added successfully!");
      form.reset();
    } else {
      alert("❌ Failed to add item: " + result.error);
    }
  } catch (error) {
    console.error(error);
    alert("❌ Server error occurred.");
  }
});
