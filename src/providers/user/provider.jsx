import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '@hooks/local-storage';
import { getScore } from './utils';

export const userContext = createContext({});

const UserProvider = ({ children }) => {
  const [logged, setLogged] = useLocalStorage('logged');
  const [user, setUser] = useLocalStorage('user', { parse: true });
  const [form, setForm] = useLocalStorage('form', { parse: true });
  const [score, setScore] = useState(0);

  useEffect(() => {
    const {
      age,
      sex,
      countries,
      hadContact,
      symptoms,
      hypertension,
      diabetes,
      obesity,
      pulmony,
      tabaquism,
      asma,
      renalInsufficiency,
    } = form || {};

    let newScore = 0;

    newScore += getScore.age(age);
    newScore += getScore.sex(sex);
    newScore += getScore.countries(countries);
    newScore += getScore.hadContact(hadContact);
    newScore += getScore.symptoms(symptoms);
    newScore += getScore.hypertension(hypertension);
    newScore += getScore.diabetes(diabetes);
    newScore += getScore.obesity(obesity);
    newScore += getScore.pulmony(pulmony);
    newScore += getScore.tabaquism(tabaquism);
    newScore += getScore.asma(asma);
    newScore += getScore.renalInsufficiency(renalInsufficiency);

    setScore(newScore);
  }, [form]);

  const logout = () => {
    setLogged();
    setUser({});
    setForm({});
    setScore(0);
  };

  return (
    <userContext.Provider
      value={{
        logged,
        setLogged,
        user,
        setUser,
        form,
        setForm,
        score,
        logout,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
