import styles from './PartyUtil.module.scss';

const PartyInfos = {
  kmt: {
    label: '國民黨',
    colorClass: styles.kmt,
    lastTerm: 35
  },
  dpp: {
    label: '民進黨',
    colorClass: styles.dpp,
    lastTerm: 68
  },
  pfp: {
    label: '親民黨',
    colorClass: styles.pfp,
    lastTerm: 3
  },
  tpp: {
    label: '民眾黨',
    colorClass: styles.tpp,
    lastTerm: 'N/A'
  },
  npp: {
    label: '時代力量',
    colorClass: styles.npp,
    lastTerm: 3
  },
  tsp: {
    label: '台灣基進',
    colorClass: styles.tsp,
    lastTerm: 'N/A'
  },
  np: {
    label: '新黨',
    colorClass: styles.np,
    lastTerm: 0
  },
  gp: {
    label: '綠黨',
    colorClass: styles.gp,
    lastTerm: 0
  },
  others: {
    label: '其他政黨',
    colorClass: styles.others,
    lastTerm: 4
  }
};

const distributionToSeats = (dist) => {
  let aggr = dist.reduce((aggregate, party) => {
    for (let i = 0; i < party.prediction; i++) {
      aggregate.seats.push({
        colorClass: PartyInfos[party.partyId].colorClass
      });
    }
    aggregate.count += party.prediction;
    return aggregate;
  }, { count: 0, seats: [] });

  while (aggr.count < 113) {
    aggr.seats.push({
      colorClass: styles.default
    });
    aggr.count++;
  }
  return aggr.seats;
};

export{ PartyInfos, distributionToSeats };

