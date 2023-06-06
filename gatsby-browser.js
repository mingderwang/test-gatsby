/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import { rootWrapper } from "./root-wrapper";
import "./src/css/globals.css"; // for tailwinds and DaisyUI

export const wrapPageElement = rootWrapper;
