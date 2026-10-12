/* ════════════════════════════════════════════════════════════
   打卡薪資系統 — 設定檔

   整套系統只有這個檔案需要修改。
   把下面引號裡的內容換成貴公司的，存檔後上傳即可。

   取得方式請見「安裝說明.md」第 2、3 步。
   ════════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ── 1. Apps Script 網頁應用程式網址 ──────────────────────
     部署 Apps Script 後取得，長得像：
     https://script.google.com/macros/s/AKfyc...一長串.../exec
     兩個頁面共用同一個網址。                                */

  API_URL: 'https://script.google.com/macros/s/AKfycbwWe7Iw3i1xagxfeCFeQ0RGUpWbJkaQoUDkxECKBpwoyvRXEZ5FBzDW1AQ_SbzoBA6wLg/exec',


  /* ── 2. LINE LIFF ID ────────────────────────────────────
     在 LINE Developers 建立兩個 LIFF 應用後取得，
     長得像：1234567890-AbCdEfGh                            */

  LIFF_CHECKIN: '2011931868-VcunBco6',   // 給全體員工使用
  LIFF_ADMIN:   '2011931868-Eg4VLxRo',   // 只給管理者使用
  LIFF_STAFF:   '請貼上員工服務的 LIFF ID',   // 打卡記錄／請假／代墊付款


  /* ── 3. 顯示設定 ─────────────────────────────────────── */

  // 顯示在頁面標題的公司名稱
  COMPANY_NAME: '開心果公司'
};
