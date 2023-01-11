import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TransactionDaysFullAccountNumberFieldsEnum {
    PaymentAccountNumber = "paymentAccountNumber",
    UnmaskedAccountNumber = "unmaskedAccountNumber"
}
export declare class TransactionDays extends SpeakeasyBase {
    fullAccountNumberFields?: TransactionDaysFullAccountNumberFieldsEnum[];
    numberOfTransactionDays?: number;
}
