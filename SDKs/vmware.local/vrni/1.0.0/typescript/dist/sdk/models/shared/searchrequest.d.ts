import { SpeakeasyBase } from "../../../internal/utils";
import { AllEntityTypeEnum } from "./allentitytypeenum";
import { SortByClause } from "./sortbyclause";
import { TimeRange } from "./timerange";
/**
 * Search Request
 */
export declare class SearchRequest extends SpeakeasyBase {
    cursor?: string;
    entityType?: AllEntityTypeEnum;
    /**
     * query filter
     */
    filter?: string;
    size?: number;
    sortBy?: SortByClause;
    timeRange?: TimeRange;
}
