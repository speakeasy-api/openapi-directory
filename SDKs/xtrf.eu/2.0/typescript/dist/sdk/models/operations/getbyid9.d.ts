import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetById9Request extends SpeakeasyBase {
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class GetById9Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectDTOv2?: shared.ProjectDTOv2;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
