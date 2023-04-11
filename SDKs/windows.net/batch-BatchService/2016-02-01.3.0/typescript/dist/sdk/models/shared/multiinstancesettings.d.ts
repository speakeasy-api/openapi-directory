import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceFile } from "./resourcefile";
/**
 * Settings which specify how to run a multi-instance task. Multi-instance tasks are commonly used to support MPI tasks.
 */
export declare class MultiInstanceSettings extends SpeakeasyBase {
    /**
     * A list of files that the Batch service will download before running the coordination command line. The difference between common resource files and task resource files is that common resource files are downloaded for all subtasks including the primary, whereas task resource files are downloaded only for the primary.
     */
    commonResourceFiles?: ResourceFile[];
    /**
     * The command to run on the compute node instances for coordinating among the subtasks.
     */
    coordinationCommandLine?: string;
    /**
     * The number of compute nodes required by the multi-instance task.
     */
    numberOfInstances: number;
}
