import { SpeakeasyBase } from "../../../internal/utils";
import { Fields3 } from "./fields3";
import { Transaction } from "./transaction";
export declare class TwoSendPaymentsWithSavedCreditCardRequest extends SpeakeasyBase {
    currencyCode: string;
    fields: Fields3;
    installments: number;
    installmentsInterestRate: number;
    installmentsValue: number;
    paymentSystem: number;
    referenceValue: number;
    transaction: Transaction;
    value: number;
}
