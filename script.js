 emailjs.init("hWZCzJ010XYwHKKHz");

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const sendBtn = form.querySelector("button");
      sendBtn.disabled = true;
      sendBtn.textContent = "Sending...";

      emailjs.sendForm("service_vyfe47i", "template_s65tzhi", form)
        .then((res) => {
          alert("✅ Message sent successfully!");
          form.reset();
        })
        .catch((err) => {
          console.error(err);
          alert("❌ Failed to send message. Please try again later.");
        })
        .finally(() => {
          sendBtn.disabled = false;
          sendBtn.textContent = "Send Message";
        });
    });
      
     //Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.getElementById('navbar');
    menuBtn.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

    // Dark Mode
    function toggleMode() {
      document.body.classList.toggle('dark');
    }