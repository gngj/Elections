var getParties = function () {

  var likud = new party('ליכוד', 1066669);
  var yeshatid = new party('יש עתיד', 875959);
  var shas = new party('שס', 319637);
  var kachollavan = new party('המחנה הממלכתי', 455498);
  var yamina = new party('הבית היהודי', 0);
  var avoda = new party('עבודה', 165307);
  var yahadut = new party('יהדות התורה', 226601);
  var betenu = new party('ישראל ביתנו', 204031);
  var tziyonutdatit = new party('הציונות הדתית', 489378);
  var meshutefet = new party('חד"ש תע"ל', 175190);
  var meretz = new party('מרצ', 198366);
  var aravitmeuhedet = new party('ערבית מאוחדת', 167028);
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
