import { SpeakeasyBase } from "../../../internal/utils";
import { TaskAddParameter } from "./taskaddparameter";
/**
 * A collection of Azure Batch tasks to add.
 */
export declare class TaskAddCollectionParameter extends SpeakeasyBase {
    /**
     * The collection of tasks to add.
     */
    value: TaskAddParameter[];
}
