import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetById7Request extends SpeakeasyBase {
    /**
     * list of additional fields which should be embedded in the response (available options: tasks)
     */
    embed?: string;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class GetById7Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectDTOv1?: shared.ProjectDTOv1;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
