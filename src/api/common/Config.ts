import config from "../../config";
import { isDev } from "../../utils/environmentHelper";

export const apiUrl = !isDev ? "https://localhost:7189/api/" : config.apiUrl;
