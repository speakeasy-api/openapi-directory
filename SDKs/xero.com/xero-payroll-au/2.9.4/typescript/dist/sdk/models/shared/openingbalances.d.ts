import { SpeakeasyBase } from "../../../internal/utils";
import { DeductionLine } from "./deductionline";
import { EarningsLine } from "./earningsline";
import { LeaveLine } from "./leaveline";
import { ReimbursementLine } from "./reimbursementline";
import { SuperLine } from "./superline";
export declare class OpeningBalances extends SpeakeasyBase {
    deductionLines?: DeductionLine[];
    earningsLines?: EarningsLine[];
    leaveLines?: LeaveLine[];
    /**
     * Opening Balance Date. (YYYY-MM-DD)
     */
    openingBalanceDate?: string;
    reimbursementLines?: ReimbursementLine[];
    superLines?: SuperLine[];
    /**
     * Opening Balance tax
     */
    tax?: string;
}
