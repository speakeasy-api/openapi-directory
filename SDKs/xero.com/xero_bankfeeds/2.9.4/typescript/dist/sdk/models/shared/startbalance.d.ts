import { SpeakeasyBase } from "../../../internal/utils";
import { CreditDebitIndicatorEnum } from "./creditdebitindicatorenum";
/**
 * The starting balance of the statement
 */
export declare class StartBalance extends SpeakeasyBase {
    /**
     * decimal(19,4) unsigned Opening/closing balance amount.
     */
    amount?: number;
    /**
     * If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer.
     */
    creditDebitIndicator?: CreditDebitIndicatorEnum;
}
