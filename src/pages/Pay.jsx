import { useEffect } from "react";

export default function Pay() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    fetch("https://backend-e5v0.onrender.com/api/payments/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: params.get("type"),
        plan: params.get("plan"),
        duration: params.get("duration"),
        listingId: params.get("listingId"),
        userId: params.get("uid"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.checkoutFormContent) {
          throw new Error(data.message || "Ödeme başlatılamadı");
        }

        document.open();
        document.write(`
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Güvenli Ödeme • TRPHONE</title>

  <!-- FONT -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">

  <style>
    * {
      box-sizing: border-box;
      font-family: 'Inter', system-ui, -apple-system;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background: radial-gradient(circle at top, #0f172a, #020617 70%);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }

    .container {
      width: 100%;
      max-width: 420px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid #1e293b;
      border-radius: 20px;
      padding: 24px 22px 28px;
      box-shadow: 0 20px 60px rgba(0,0,0,.6);
    }

    .header {
      text-align: center;
      margin-bottom: 18px;
    }

    .logo {
      height: 34px;
      margin-bottom: 10px;
    }

    .title {
      font-size: 20px;
      font-weight: 800;
      color: #facc15;
      margin-bottom: 6px;
    }

    .subtitle {
      font-size: 13px;
      color: #9ca3af;
      line-height: 1.4;
    }

    .secure {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      font-size: 12px;
      color: #22c55e;
      margin: 14px 0 18px;
      font-weight: 600;
    }

    .iyzico-box {
      background: #020617;
      border: 1px solid #1e293b;
      border-radius: 14px;
      padding: 14px;
    }

    .footer {
      margin-top: 18px;
      text-align: center;
      font-size: 11px;
      color: #9ca3af;
      line-height: 1.5;
    }

    .footer b {
      color: #e5e7eb;
    }

    @media (max-width: 420px) {
      body {
        padding: 14px;
      }
      .container {
        border-radius: 16px;
        padding: 20px 16px 24px;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <img src="/logo1.png" alt="TRPHONE" class="logo" />
      <div class="title">Güvenli Ödeme</div>
      <div class="subtitle">
        Ödemeniz <b>iyzico</b> altyapısı ile güvenle işlenmektedir.
        Kart bilgileriniz TRPHONE sunucularında saklanmaz.
      </div>
    </div>

    <div class="secure">🔒 256-bit SSL • 3D Secure</div>

    <div class="iyzico-box">
      ${data.checkoutFormContent}
    </div>

    <div class="footer">
      Bu ödeme işlemi <b>TRPHONE</b> tarafından<br/>
      <b>iyzico</b> güvenli ödeme altyapısı kullanılarak gerçekleştirilmektedir.
    </div>
  </div>
</body>
</html>
        `);
        document.close();
      })
      .catch((err) => {
        document.body.innerHTML = `
          <div style="
            min-height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            background:#020617;
            color:#f87171;
            font-family:Inter,system-ui;
            padding:24px;
            text-align:center;
          ">
            ${err.message}
          </div>
        `;
      });
  }, []);

  return null;
}
