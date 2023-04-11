import { SpeakeasyBase } from "../../../internal/utils";
import { EntityIdWithTime } from "./entityidwithtime";
/**
 * OK
 */
export declare class PagedListResponseWithTime extends SpeakeasyBase {
    cursor?: string;
    endTime?: number;
    results?: EntityIdWithTime[];
    startTime?: number;
    totalCount?: number;
}
