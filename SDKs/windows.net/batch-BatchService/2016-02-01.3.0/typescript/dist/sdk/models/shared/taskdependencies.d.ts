import { SpeakeasyBase } from "../../../internal/utils";
import { TaskIdRange } from "./taskidrange";
/**
 * Specifies any dependencies of a task. Any task that is explicitly specified or within a dependency range must complete before the dependant task will be scheduled.
 */
export declare class TaskDependencies extends SpeakeasyBase {
    /**
     * The list of task ranges that must complete before this task can be scheduled.
     */
    taskIdRanges?: TaskIdRange[];
    /**
     * The list of task ids that must complete before this task can be scheduled.
     */
    taskIds?: string[];
}
