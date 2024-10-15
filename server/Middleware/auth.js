export const isAdmin = (req, res) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }
  return res
    .status(400)
    .json({ sucess: false, message: "Acess denied. Admins Only." });
};
