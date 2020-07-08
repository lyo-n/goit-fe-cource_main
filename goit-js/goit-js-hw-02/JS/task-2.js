const calculateEngravingPrice = function(message, pricePerWord) {
    return message.split(" ").length*pricePerWord;};
    let info=(`Сумма за гравировку всей фразы =`);
  console.log((info),
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',10,),);
    console.log((info),
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',20,),);
    console.log((info),
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),);
    console.log((info),
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),);