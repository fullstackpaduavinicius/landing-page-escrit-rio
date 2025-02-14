const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require ("dotenv")

dotenv.config(); 
const app = express();
app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🔥 MongoDB conectado!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));


const ImovelSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
  detalhes: String,
});

const Imovel = mongoose.model("Imovel", ImovelSchema);


app.post("/api/cadastrar", async (req, res) => {
  try {
    const { nome, email, telefone, detalhes } = req.body;

    if (!nome || !email || !telefone || !detalhes) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    const novoImovel = new Imovel({ nome, email, telefone, detalhes });
    await novoImovel.save();

    res.status(201).json({ message: "Cadastro realizado com sucesso!", data: novoImovel });
  } catch (error) {
    res.status(500).json({ message: "Erro ao cadastrar o imóvel", error });
  }
});


app.get("/api/imoveis", async (req, res) => {
  try {
    const imoveis = await Imovel.find();
    res.json(imoveis);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar imóveis", error });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
