import { SpeakeasyBase } from "../../../internal/utils";
import { MonthSummary } from "./monthsummary";
export declare class MonthSummariesResponseData extends SpeakeasyBase {
    months: MonthSummary[];
    /**
     * The knowledge of the server
     */
    serverKnowledge: number;
}
/**
 * The list of budget months
 */
export declare class MonthSummariesResponse extends SpeakeasyBase {
    data: MonthSummariesResponseData;
}
