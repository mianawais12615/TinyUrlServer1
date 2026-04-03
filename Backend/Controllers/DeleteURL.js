import { URLs } from "../Models/url.js";

export const DeleteURL = async (req, res) => {
  const { shortId } = req.params;
  try {
    const result = await URLs.findOneAndDelete({ shortId });
    
    if (!result) {
      return res.status(404).json({
        ok: false,
        message: "URL not found",
      });
    }
    
    res.status(200).json({ 
      ok: true,
      message: "URL deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting URL:", err);
    res.status(500).json({ 
      ok: false,
      message: err.message || "Failed to delete URL",
    });
  }
};
