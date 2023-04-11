import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTaskRequest extends SpeakeasyBase {
    /**
     * Created new task for a given project.
     */
    taskCreateDTO: shared.TaskCreateDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class CreateTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    taskDTO?: shared.TaskDTO;
}
