type Config = {
  apiUrl: string;
};
const configDev: Config = {
  apiUrl: "https://trash2cashapi.trash2cash.us/v1/api/",
  // apiUrl: "https://localhost:7189/api/",
};

const configProd: Config = {
  apiUrl: "https://trash2cashapi.trash2cash.us/v1/api/",
};
const env = process.env.REACT_APP_ENV || "production";

const configMap: any = {
  development: configDev,
  production: configProd,
};

const config: Config = configMap[env];

export default config;
