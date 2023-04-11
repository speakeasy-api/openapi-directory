import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceFile } from "./resourcefile";
/**
 * Information about the settings required for multi-instance task.
 */
export declare class MultiInstanceSettings extends SpeakeasyBase {
    /**
     * Gets or sets a list of files that Batch will download on all subtasks.
     */
    commonResourceFiles?: ResourceFile[];
    /**
     * Gets or sets the command to be run on the compute node instances to setup coordination among the subtasks.
     */
    coordinationCommandLine?: string;
    /**
     * Gets or sets the number of compute node instances used for multi-instance task.
     */
    numberOfInstances: number;
}
