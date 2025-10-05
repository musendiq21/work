// ===== Toggle dark/light mode =====
function toggleMode() {
  document.body.classList.toggle("dark");
}

// ===== Handle form submission via EmailJS =====
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const sendBtn = form.querySelector("button");
  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";

  // Use sendForm (works directly with form element)
  emailjs.sendForm("service_vyfe47i", "template_s65tzhi", form)
    .then(() => {
      alert("✅ Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("❌ Error sending message:", error);
      alert("❌ Failed to send message. Please try again later.");
    })
    .finally(() => {
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Message";
    });
});

// ===== Social Buttons =====
function openWhatsApp() {
  window.open("https://wa.me/2347025962295", "_blank");
}

function openGitHub() {
  window.open("https://github.com/musendiq21", "_blank");
}

function openLinkedIn() {
  window.open("https://www.linkedin.com/in/musendiq-oladimeji", "_blank");
}
