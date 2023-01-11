import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsageValues extends SpeakeasyBase {
    taskCount?: number;
}
/**
 * The task usage of a particular day.
 *
**/
export declare class Usage extends SpeakeasyBase {
    date?: string;
    values?: UsageValues;
}
