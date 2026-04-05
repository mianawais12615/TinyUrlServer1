import { URLs } from "../Models/url.js";
import { generateShortId } from "../Utils/Keys.js";

export const SaveURL = async (req, res) => {
  const { longUrl } = req.body;
  
  if (!longUrl) {
    return res.status(400).json({
      ok: false,
      message: "URL is required",
    });
  }

  try {
    // Validate URL format
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlPattern.test(longUrl)) {
      return res.status(400).json({
        ok: false,
        message: "Invalid URL format",
      });
    }

    const shortId = generateShortId(7);
    const newURL = new URLs({ longUrl: longUrl, shortId: shortId });
    await newURL.save();
    const shortURL = `https://tinyurl2.up.railway.app/${shortId}`;
    
    console.log(`URL shortened: ${longUrl} -> ${shortURL}`);
    
    res.status(200).json({
      ok: true,
      shortURL: shortURL,
      shortId: shortId,
    });
  } catch (err) {
    console.error("Error saving URL:", err);
    res.status(500).json({
      ok: false,
      message: err.message || "Failed to save URL",
    });
  }
};
