/*
 * ES6 part
 * import
 * extends
 *
 */
import {displayInPage} from "./util";
import Programmer from './v5-Programmer';

const programmer = new Programmer('Olli', 'JavaScript');
const programmers = new Set();
programmers.add(programmer);
programmers.add(new Programmer('Oma', 'Cobol'));
programmers.forEach(p => displayInPage(p.code()));
