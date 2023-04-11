import { SpeakeasyBase } from "../../../internal/utils";
import { CreditDebitIndicatorEnum } from "./creditdebitindicatorenum";
/**
 * The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount.
 */
export declare class EndBalance extends SpeakeasyBase {
    amount?: number;
    /**
     * If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer.
     */
    creditDebitIndicator?: CreditDebitIndicatorEnum;
}
