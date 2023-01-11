import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionDays } from "./transactiondays";
export declare class ContainerAttributes extends SpeakeasyBase {
    bank?: TransactionDays;
    creditcard?: TransactionDays;
    insurance?: TransactionDays;
    investment?: TransactionDays;
    loan?: TransactionDays;
}
