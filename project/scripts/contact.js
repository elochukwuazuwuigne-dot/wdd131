// Footer auto date
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});

// Save message draft
const form = document.querySelector("#contact-form");
const status = document.querySelector("#save-status");

if (form) {
  // Restore draft
  const draft = JSON.parse(localStorage.getItem("contactDraft")) || {};
  if (draft.name) form.name.value = draft.name;
  if (draft.email) form.email.value = draft.email;
  if (draft.message) form.message.value = draft.message;

  // Save as user types
  form.addEventListener("input", () => {
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };
    localStorage.setItem("contactDraft", JSON.stringify(data));
    status.textContent = "Message draft saved!";
  });

  // Handle submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.removeItem("contactDraft");
    status.textContent = "✅ Message sent successfully (demo only)";
    form.reset();
  });
}
