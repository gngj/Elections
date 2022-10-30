var getParties = function () {

  var likud = new party('ליכוד', 1079249);
  var yeshatid = new party('יש עתיד', 904929);
  var shas = new party('שס', 311487);
  var kachollavan = new party('המחנה הממלכתי', 434366);
  var yamina = new party('הבית היהודי', 0);
  var avoda = new party('עבודה', 144788);
  var yahadut = new party('יהדות התורה', 217183);
  var betenu = new party('ישראל ביתנו', 217183);
  var tziyonutdatit = new party('הציונות הדתית', 506760);
  var meshutefet = new party('חד"ש תע"ל', 144788);
  var meretz = new party('מרצ', 180986);
  var aravitmeuhedet = new party('ערבית מאוחדת', 144788);
  var balad = new party('בל"ד', 0);

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

  var gushim =[
    new gush("ימין", [likud, shas, yahadut, yamina, tziyonutdatit]),
    new gush("שמאל", [yeshatid, kachollavan, meshutefet, avoda, meretz, betenu, aravitmeuhedet, balad])
  ]

  return {parties: parties, partyConnections: partyConnections, gushim: gushim};
};

var percent = 0.0325;
