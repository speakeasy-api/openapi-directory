import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A range of task ids that a task can depend on. All tasks with ids in the range must complete successfully before the dependent task can be scheduled.
 */
export declare class TaskIdRange extends SpeakeasyBase {
    /**
     * The last task id in the range.
     */
    end: number;
    /**
     * The first task id in the range.
     */
    start: number;
}
