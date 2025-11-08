export default function handler(req, res) {
  const SALT = process.env.KEY_SALT || "ducanhdz-secret";
  const PREFIX = "#DUCANHDZ";

  const date = new Date();
  const dateStr = date.toISOString().slice(0, 10);

  const crypto = require("crypto");
  const hash = crypto
    .createHash("sha256")
    .update(SALT + "|" + dateStr)
    .digest("hex")
    .toUpperCase();
  const key = PREFIX + hash.slice(0, 16);

  res.status(200).json({ date: dateStr, key });
}
