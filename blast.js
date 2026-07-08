function renderLockScreen(customMessage, contactInfo) {
    document.title = "Site Temporarily Unavailable";

    document.body.innerHTML = `
      <div style="
        min-height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        background:#0f0f10;
        color:#f5f5f5;
        text-align:center;
        padding:2rem;
        box-sizing:border-box;
      ">
        <div style="max-width:480px;">
          <h1 style="font-size:1.5rem;font-weight:600;margin-bottom:0.75rem;">
            Site Temporarily Unavailable
          </h1>
          <p style="font-size:1rem;line-height:1.6;color:#c9c9c9;margin-bottom:1.5rem;">
            ${customMessage || "This site is currently paused pending an outstanding invoice."}
          </p>
          <p style="font-size:0.95rem;color:#9a9a9a;">
            ${contactInfo || "Please contact your developer to restore access."}
          </p>
        </div>
      </div>
    `;

    // Stop any other scripts/animations from re-rendering content underneath
    window.stop && window.stop();
  }
})();
