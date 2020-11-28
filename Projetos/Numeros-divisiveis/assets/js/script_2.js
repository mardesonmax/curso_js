const ePaisagem = (altura, largura) => {
    let modo = 'Imagem no modo: ';

    modo += (altura > largura)? 'Retrato' : 'Paisagem';

    console.log(modo);
}

ePaisagem(1024, 768);