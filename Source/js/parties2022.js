var getParties = function () {

  var likud = new party('ליכוד', 1066669);
  var yeshatid = new party('יש עתיד', 613810);
  var shas = new party('שס', 315953);
  var kachollavan = new party('המחנה הממלכתי', 291815);
  var yamina = new party('הבית היהודי', 0);
  var avoda = new party('עבודה', 268687);
  var yahadut = new party('יהדות התורה', 248605);
  var betenu = new party('ישראל ביתנו', 248340);
  var tziyonutdatit = new party('הציונות הדתית', 225539);
  var meshutefet = new party('חד"ש תע"ל', 212188);
  var meretz = new party('מרצ', 202153);
  var aravitmeuhedet = new party('ערבית מאוחדת', 167028);
  var balad = new party('בל"ד', 212188);

  var parties = [
    likud,
    yeshatid,
    kachollavan,
    shas,
    yahadut,
    meshutefet,
    avoda,
    meretz,
    betenu,
    yamina,
    tziyonutdatit,
    aravitmeuhedet,
    balad,
  ];

  var partyConnections = [
    new partyConnection(likud, tziyonutdatit),
    new partyConnection(yeshatid, kachollavan),
    new partyConnection(shas, yahadut),
    new partyConnection(avoda, meretz),
  ];

  return {parties: parties, partyConnections: partyConnections};
};

var percent = 0.0325;
