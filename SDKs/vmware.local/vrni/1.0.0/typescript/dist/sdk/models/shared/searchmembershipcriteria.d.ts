import { SpeakeasyBase } from "../../../internal/utils";
import { AllEntityTypeEnum } from "./allentitytypeenum";
export declare class SearchMembershipCriteria extends SpeakeasyBase {
    entityType?: AllEntityTypeEnum;
    /**
     * As defined in search end point
     */
    filter?: string;
}
