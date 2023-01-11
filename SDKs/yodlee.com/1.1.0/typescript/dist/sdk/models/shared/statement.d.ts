import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare class Statement extends SpeakeasyBase {
    accountId?: number;
    amountDue?: Money;
    apr?: number;
    billingPeriodEnd?: string;
    billingPeriodStart?: string;
    cashAdvance?: Money;
    cashApr?: number;
    dueDate?: string;
    id?: number;
    interestAmount?: Money;
    isLatest?: boolean;
    lastPaymentAmount?: Money;
    lastPaymentDate?: string;
    lastUpdated?: string;
    loanBalance?: Money;
    minimumPayment?: Money;
    newCharges?: Money;
    principalAmount?: Money;
    statementDate?: string;
}
