import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";
export declare class BudgetDetailResponseData extends SpeakeasyBase {
    budget: BudgetDetail;
    /**
     * The knowledge of the server
     */
    serverKnowledge: number;
}
/**
 * The requested budget
 */
export declare class BudgetDetailResponse extends SpeakeasyBase {
    data: BudgetDetailResponseData;
}
