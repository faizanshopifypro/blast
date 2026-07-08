(function () {
  document.querySelector('body').innerHTML = `
  
     
      <style>
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:Arial,Helvetica,sans-serif;
          background:#111827;
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          min-height:100vh;
          text-align:center;
          padding:20px;
        }

        .notice{
          max-width:700px;
        }

        .icon{
          font-size:120px;
          line-height:1;
          margin-bottom:20px;
        }

        h1{
          font-size:42px;
          color:#ff4d4f;
          margin-bottom:20px;
        }

        p{
          font-size:20px;
          line-height:1.7;
          color:#d1d5db;
        }
      </style>
    
      <div class="notice">
        <div class="icon">⚠️</div>

        <h1>Website Temporarily Unavailable</h1>

        <p>
          Payments for the development work are currently pending.<br><br>
          Please contact your developer to restore access to this website.
        </p>
      </div>
   
  `;
})();
