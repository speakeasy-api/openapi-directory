import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsageValues extends SpeakeasyBase {
    /**
     * The amount of task runs that have been used.
     *
     * @remarks
     *
     */
    taskCount?: number;
}
/**
 * The task usage of a particular day.
 *
 * @remarks
 *
 */
export declare class Usage extends SpeakeasyBase {
    /**
     * The date when the usage record is created.
     *
     * @remarks
     *
     */
    date?: string;
    values?: UsageValues;
}
