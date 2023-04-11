import { SpeakeasyBase } from "../../../internal/utils";
import { DeductionType, DeductionTypeInput } from "./deductiontype";
import { EarningsRate, EarningsRateInput } from "./earningsrate";
import { LeaveType, LeaveTypeInput } from "./leavetype";
import { ReimbursementType, ReimbursementTypeInput } from "./reimbursementtype";
export declare class PayItem extends SpeakeasyBase {
    deductionTypes?: DeductionType[];
    earningsRates?: EarningsRate[];
    leaveTypes?: LeaveType[];
    reimbursementTypes?: ReimbursementType[];
}
export declare class PayItemInput extends SpeakeasyBase {
    deductionTypes?: DeductionTypeInput[];
    earningsRates?: EarningsRateInput[];
    leaveTypes?: LeaveTypeInput[];
    reimbursementTypes?: ReimbursementTypeInput[];
}
