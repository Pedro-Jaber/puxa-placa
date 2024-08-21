//* Dependencies
require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

//* Routers Imports

//* Dotenv

//* App
const app = express();
const PORT = 5505 || process.env.PORT;

//* Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* Public
app.use(express.static("public"));

//* View Engine
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "layouts/main");

//* Routes
app.get(["/", "/home"], (req, res) => {
  res.status(200).render("home");
});
app.post("/", async (req, res) => {
  const placa = "ABC1D23";
  // const placa = req.body.placa;
  console.log(placa);

  const token = "token" || process.env.TOKEN;

  // const apiRes = await fetch(
  //   `https://wdapi2.com.br/consulta/${placa}/${token}`
  // );

  const carData = {
    MARCA: "VW",
    MODELO: "CROSSFOX",
    SUBMODELO: "CROSSFOX",
    VERSAO: "CROSSFOX",
    ano: "2007",
    anoModelo: "2007",
    chassi: "*****10137",
    codigoSituacao: "0",
    cor: "Prata",
    data: "20/07/2022 15:10:09",
    extra: {
      ano_fabricacao: "2007",
      ano_modelo: "2007",
      caixa_cambio: "",
      cap_maxima_tracao: "198",
      carroceria: "",
      chassi: "9BWKB05Z174110137",
      cilindradas: "1599",
      combustivel: "Alcool / Gasolina",
      di: "0",
      eixo_traseiro_dif: "",
      eixos: "2",
      especie: "Passageiro",
      faturado: "92749647000139",
      grupo: "CROSS FOX",
      limite_restricao_trib: "",
      linha: "55140805",
      media_preco: null,
      modelo: "VW/CROSSFOX",
      motor: "BPA160984",
      municipio: "SAO LEOPOLDO",
      nacionalidade: "Nacional",
      peso_bruto_total: "158",
      placa: "INT8236",
      placa_modelo_antigo: "INT8236",
      placa_modelo_novo: "INT8C36",
      quantidade_passageiro: "5",
      registro_di: "",
      renavam: null,
      restricao_1: "SEM RESTRICAO",
      restricao_2: "SEM RESTRICAO",
      restricao_3: "SEM RESTRICAO",
      restricao_4: "SEM RESTRICAO",
      "s.especie": "Passageiro",
      segmento: "Auto",
      situacao_chassi: "N",
      situacao_veiculo: "S",
      sub_segmento: "AU - HATCH PEQUENO",
      terceiro_eixo: "",
      tipo_carroceria: "NAO APLICAVEL",
      tipo_doc_faturado: "Juridica",
      tipo_doc_importadora: "Outros",
      tipo_doc_prop: "Fisica",
      tipo_montagem: "1",
      tipo_veiculo: "Automovel",
      uf: "RS",
      uf_faturado: "RS",
      uf_placa: "RS",
      unidade_local_srf: "0000000",
    },
    fipe: {
      dados: [
        {
          ano_modelo: "2007",
          codigo_fipe: "005225-6",
          codigo_marca: 59,
          codigo_modelo: "2368",
          combustivel: "Gasolina",
          id_valor: 77250,
          mes_referencia: "maio de 2022 ",
          referencia_fipe: 285,
          score: 101,
          sigla_combustivel: "G",
          texto_marca: "VW - VolksWagen",
          texto_modelo: "CROSSFOX 1.6 Mi Total Flex 8V 5p",
          texto_valor: "R$ 28.799,00",
          tipo_modelo: 1,
        },
      ],
    },
    listamodelo: ["CROSSFOX"],
    logo: "https://apiplacas.com.br/logos/logosMarcas/vw.png",
    marca: "VW",
    marcaModelo: "VW/CROSSFOX",
    mensagemRetorno: "Sem erros.",
    modelo: "CROSSFOX",
    municipio: "S\u00e3o Leopoldo",
    origem: "NACIONAL",
    placa: "INT8C36",
    placa_alternativa: "INT8236",
    situacao: "Sem restri\u00e7\u00e3o",
    token: "",
    uf: "RS",
  };

  //if 401 -> placa invalida
  //  retorna "Placa Invalida favor usar o formato AAA0X00 ou AAA9999"
  //if 406 -> Sem resultados
  //  retorna "A placa não foi encontrada no sistema"
  //if 500 -> Internal server erro
  //  retorne "Infelizmente nosso serviço está fora de serviço"

  res.status(200).render("carro", { carData });
});

//TODO error 404

//* App Listen
app.listen(PORT, () => {
  console.log("Server:\x1b[92m Online \x1b[0m");
  console.log("Port: " + PORT);
  console.log(`link: http://localhost:${PORT}`);
  console.log("->");
});
