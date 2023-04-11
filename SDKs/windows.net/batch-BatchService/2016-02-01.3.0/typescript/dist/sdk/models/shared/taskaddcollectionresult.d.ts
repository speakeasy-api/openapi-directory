import { SpeakeasyBase } from "../../../internal/utils";
import { TaskAddResult } from "./taskaddresult";
/**
 * Response to a TaskOperations.AddCollection request.
 */
export declare class TaskAddCollectionResult extends SpeakeasyBase {
    /**
     * The results of the add task collection operation.
     */
    value?: TaskAddResult[];
}
