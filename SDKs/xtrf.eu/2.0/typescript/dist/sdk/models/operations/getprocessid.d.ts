import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProcessIdRequest extends SpeakeasyBase {
    projectId: string;
}
export declare class GetProcessIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    catToolProjectDTO?: shared.CATToolProjectDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
