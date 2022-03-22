import "./css/styles.css";
// import * as IMP from "./fetchCountries.js";
import { fetchCountries } from "./fetchCountries";

const DEBOUNCE_DELAY = 300;

fetchCountries(" ukraine");
