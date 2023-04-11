import { SpeakeasyBase } from "../../../internal/utils";
import { MicroSecGroup } from "./microsecgroup";
import { TimeRange } from "./timerange";
/**
 * Recommended Rules Request
 */
export declare class RecommendedRulesRequest extends SpeakeasyBase {
    group1?: MicroSecGroup;
    group2?: MicroSecGroup;
    timeRange?: TimeRange;
}
