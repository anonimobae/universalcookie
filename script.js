document.getElementById("giftForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const monkeyName = document.getElementById("monkeyName").value;
    const responseMessage = document.getElementById("responseMessage");
  
    try {
      const response = await fetch("https://formsubmit.co/recoveryaccountig@proton.me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ monkeyName }),
      });
  
      if (response.ok) {
        responseMessage.textContent = "Your gift has been sent successfully!";
      } else {
        responseMessage.textContent = "Failed to send the gift. Please try again.";
      }
    } catch (error) {
      responseMessage.textContent = "An error occurred. Please try again later.";
    }
  });
  