# Connect RMVentureX subscription requests to Google Sheets

The website sends subscription requests to a Google Apps Script web app, which writes rows into a Google Sheet. This is separate from the original Google Form's Responses tab, but you can use the **same linked spreadsheet** with a separate tab called `Website Subscriptions`.

## Set up

1. Open the Google Form and go to **Responses → Link to Sheets**. Open the linked spreadsheet.
2. In that spreadsheet, choose **Extensions → Apps Script**.
3. Replace the script editor contents with the code below.
4. In **Project Settings → Script properties**, create `SUBMISSION_SECRET` with a long random value (at least 32 characters). Keep it private.
5. Choose **Deploy → New deployment → Web app**. Set **Execute as: Me**, **Who has access: Anyone**, then authorize and deploy.
6. Copy the deployment URL ending in `/exec`. In Vercel → Project → Settings → Environment Variables, set:
   - `GOOGLE_SHEETS_WEB_APP_URL` = that web app URL
   - `GOOGLE_SHEETS_SUBMISSION_SECRET` = the exact secret from Script properties
7. Redeploy the website and send a test submission. Check the **Website Subscriptions** tab for the new row.

**Important:** The existing Google Form's *Responses* tab will not count these website submissions as form responses. They are recorded in a separate tab of the same Google Sheet. The script's public endpoint is protected by a shared secret but can still receive automated requests; add rate limiting or bot protection before a high-volume launch.

## Apps Script

```javascript
const SHEET_NAME = "Website Subscriptions";

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const p = e.parameter || {};
    const secret = PropertiesService.getScriptProperties().getProperty("SUBMISSION_SECRET");
    if (!secret || p.token !== secret) return reply({ ok: false, error: "Unauthorized" });

    const validInterests = ["India Equities", "US Equities", "The Corridor Thesis", "Everything"];
    const validPlans = ["Research - $99", "Desk+ - $199", "IntelFox Global - $299"];
    const name = String(p.name || "").trim();
    const email = String(p.email || "").trim().toLowerCase();
    const interest = String(p.interest || "");
    const plan = String(p.plan || "");
    if (!name || name.length > 120 || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email) ||
        email.length > 254 || !validInterests.includes(interest) ||
        !validPlans.includes(plan) || p.consent !== "Yes") {
      return reply({ ok: false, error: "Invalid submission" });
    }

    lock.waitLock(10000);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(["Submitted At", "Name", "Email", "Most Interested In", "Subscription", "Consent"]);
      sheet.setFrozenRows(1);
    }
    // Prefix untrusted cells to prevent spreadsheet formula injection.
    const safe = value => /^[=+@-]/.test(value) ? "'" + value : value;
    sheet.appendRow([new Date(), safe(name), safe(email), safe(interest), safe(plan), "Yes"]);
    SpreadsheetApp.flush();
    return reply({ ok: true });
  } catch (err) {
    console.error(err);
    return reply({ ok: false, error: "Failed to save" });
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}

function reply(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
```

To change the script after deployment, deploy a **new version** using **Manage deployments → Edit → New version**.

The prices in the website's pricing cards are currently different from those shown in the Google Form screenshot. Confirm the correct published pricing before accepting paid subscription inquiries.
