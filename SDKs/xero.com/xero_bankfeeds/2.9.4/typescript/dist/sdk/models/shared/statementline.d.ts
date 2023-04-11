import { SpeakeasyBase } from "../../../internal/utils";
import { CreditDebitIndicatorEnum } from "./creditdebitindicatorenum";
/**
 * the lines details for a statement
 */
export declare class StatementLine extends SpeakeasyBase {
    /**
     * Transaction amount
     */
    amount?: number;
    /**
     * The cheque/check number
     */
    chequeNumber?: string;
    /**
     * If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer.
     */
    creditDebitIndicator?: CreditDebitIndicatorEnum;
    /**
     * Transaction description
     */
    description?: string;
    /**
     * Typically the merchant or payee name
     */
    payeeName?: string;
    /**
     * The date that the transaction was processed or cleared as seen in internet banking ISO-8601 YYYY-MM-DD
     */
    postedDate?: Date;
    /**
     * Optional field to enhance the Description
     */
    reference?: string;
    /**
     * Financial institute's internal transaction identifier. If provided this field is factored into duplicate detection.
     */
    transactionId?: string;
}
