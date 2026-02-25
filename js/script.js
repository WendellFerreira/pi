const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

if (form && statusMsg) {
  const submitBtn = form.querySelector('input[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Feedback inicial
    statusMsg.textContent = "Enviando mensagem...";
    statusMsg.style.color = "#aaa";

    // Evita envio duplicado
    submitBtn.disabled = true;

    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjgegwgn", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        statusMsg.textContent = "Mensagem enviada com sucesso! Entrarei em contato em breve.";
        statusMsg.style.color = "#1aff00";
        form.reset();
      } else {
        statusMsg.textContent = "Erro ao enviar. Tente novamente.";
        statusMsg.style.color = "#ff5555";
      }

    } catch (error) {
      statusMsg.textContent = "Erro de conexão. Verifique sua internet.";
      statusMsg.style.color = "#ff5555";
    } finally {
      // Reabilita o botão após resposta
      submitBtn.disabled = false;
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const ano = document.getElementById("ano");
    if (ano) {
      ano.textContent = new Date().getFullYear();
    }
  });

  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

  const btnZap = document.querySelector(".btn-whatsapp");
  const footer = document.querySelector("footer");

  window.addEventListener("scroll", () => {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight - 80) {
      btnZap.classList.add("hide");
    } else {
      btnZap.classList.remove("hide");
    }
  });
}
