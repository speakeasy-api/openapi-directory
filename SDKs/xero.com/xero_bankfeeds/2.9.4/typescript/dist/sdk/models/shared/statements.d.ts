import { SpeakeasyBase } from "../../../internal/utils";
import { Pagination } from "./pagination";
import { Statement } from "./statement";
/**
 * success returns Statements array of objects response
 *
 * @see {@link https://developer.xero.com/documentation/bank-feeds-api/statements}
 */
export declare class Statements extends SpeakeasyBase {
    items?: Statement[];
    pagination?: Pagination;
}
