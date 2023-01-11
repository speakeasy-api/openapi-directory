import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare class LoanPayoffDetails extends SpeakeasyBase {
    outstandingBalance?: Money;
    payByDate?: string;
    payoffAmount?: Money;
}
