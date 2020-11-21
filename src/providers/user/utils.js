const getScore = {
  age: (age) => {
    let relative = Math.floor((age - 18) / (55 - 18));

    if (relative > 1) relative = 1;
    if (relative < 0) relative = 0;

    return Math.ceil(relative > 1 ? 1 : relative) * 15;
  },
  sex: (sex) => (sex === 'male' ? 3 : sex === 'female' ? 5 : 0),
  countries: (countries) => Math.ceil(((countries?.length || 0) / 3) * 10),
  hadContact: (hadContact) => (hadContact ? 15 : 0),
  symptoms: (symptoms) => Math.ceil(((symptoms?.length || 0) / 7) * 4),
  hypertension: (hypertension) => (hypertension ? 10 : 0),
  diabetes: (diabetes) => (diabetes ? 10 : 0),
  obesity: (obesity) => (obesity ? 10 : 0),
  pulmony: (pulmony) => (pulmony ? 5 : 0),
  tabaquism: (tabaquism) => (tabaquism ? 7 : 0),
  asma: (asma) => (asma ? 6 : 0),
  renalInsufficiency: (renalInsufficiency) => (renalInsufficiency ? 3 : 0),
};

export { getScore };
