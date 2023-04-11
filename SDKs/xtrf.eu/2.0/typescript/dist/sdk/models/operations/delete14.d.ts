import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Delete14Request extends SpeakeasyBase {
    /**
     * force jobs removal (ie. started or ready)
     */
    forceJobsRemoval?: boolean;
    /**
     * remove external projects (ie. from CAT Tool)
     */
    removeExternalProjects?: boolean;
    /**
     * remove files from disc
     */
    removeFilesFromDisc?: boolean;
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class Delete14Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
