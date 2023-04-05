import app from "./app"
const PORT = process.env.PORT || 2002;

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));