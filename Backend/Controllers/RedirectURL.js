import { URLs } from "../Models/url.js";

export const RedirectURL = async (req, res) => {
  const { shortId } = req.params;
  try {
    const url = await URLs.findOne({ shortId: shortId });
    
    if (!url) {
      return res.status(404).json({
        ok: false,
        message: "URL not found",
      });
    }

    console.log(`Redirecting ${shortId} to ${url.longUrl}`);
    res.redirect(url.longUrl);
  } catch (err) {
    console.error("Error redirecting:", err);
    res.status(500).json({
      ok: false,
      message: err.message || "Failed to redirect",
    });
  }
};
