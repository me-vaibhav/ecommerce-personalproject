import jwt from "jsonwebtoken";

export const validateCookie = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized-no token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({ error: "unauthorized Invalid token" });
    }
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.log("Error in validate cookie ", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
