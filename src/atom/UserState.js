import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMemo} from 'react';
import {atom, useSetRecoilState} from 'recoil';
import {storageData} from '../api/Storage';

export const UserState = atom({
  key: 'user',
  default: null,
});

export const TokenState = atom({
  key: 'token',
  default: null,
});

export const useAuth = () => {
  const [setUser] = useSetRecoilState(UserState);
  const setToken = useSetRecoilState(TokenState);

  const auth = useMemo(
    () => ({
      authenticate: async cihUser => {
        await storageData.setItem('user', cihUser);
        setUser(cihUser);
      },
      login: async model => {
        const tokenModel = {
          accessToken: model.accessToken,
          refreshToken: model.refreshToken,
        };

        await storageData.setItem('token', tokenModel);
        await storageData.setItem('user', model);

        setToken(tokenModel);
        setUser(model);
      },
      logout: async () => {
        await AsyncStorage.clear();
        setToken(null);
        setUser(null);
      },
    }),
    [setToken, setUser],
  );
  return {auth, setUser};
};
