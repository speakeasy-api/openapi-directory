import { SpeakeasyBase } from "../../../internal/utils";
import { Fields } from "./fields";
import { Transaction } from "./transaction";
export declare class TwoSendPaymentsPublicRequest extends SpeakeasyBase {
    currencyCode: string;
    fields: Fields;
    installments: number;
    installmentsInterestRate: number;
    installmentsValue: number;
    paymentSystem: number;
    referenceValue: number;
    transaction: Transaction;
    value: number;
}
