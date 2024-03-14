const textoDireito = document.querySelector(".text-area-digitacao-direita");
const textoEsquerdo = document.querySelector(".text-area-digitacao-esquerda");
const btnCopiar = document.querySelector(".btn-copiar");
const aviso = document.querySelector(".area__digitacao__esquerda__mensagem");
const imgMenino = document.querySelector(".imagem-menino");

textoEsquerdo.addEventListener("input", escondeImagem);
escondeImagem();

function escondeImagem() {
  if (textoDireito.value.trim() === "") {
    textoEsquerdo.style.backgroundImage = "url('assets/imagem-menino.png')";
    btnCopiar.style.display = "none";
    textoEsquerdo.style.display = "none";
    imgMenino.style.display = "block";
    aviso.style.display = "block";
  } else {
    textoEsquerdo.style.backgroundImage = "none";
    btnCopiar.style.display = "block";
    textoEsquerdo.style.display = "block";
    imgMenino.style.display = "none";
    aviso.style.display = "none";
  }
}

function btnEncriptar() {
  const textoEncriptado = criptografar(textoDireito.value);
  console.log(textoEncriptado);
  textoEsquerdo.value = textoEncriptado
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  console.log(textoEsquerdo.value);
  escondeImagem();
}

function criptografar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = descriptografar(textoDireito.value);
  console.log(textoDesencriptado);
  textoEsquerdo.value = textoDesencriptado
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  escondeImagem();
}

function descriptografar(stringDesencriptada) {
  let matrizCodigo = [
    [
      ["enter", "e"],
      ["imes", "i"],
      ["ai", "a"],
      ["ober", "o"],
      ["ufat", "u"],
    ],
  ];

  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringDesencriptada;
}

function copiar_texto() {
  navigator.clipboard.writeText(textoEsquerdo.value).then(() => {
    alert("Copiado para a área de tranferência");
  });
}
