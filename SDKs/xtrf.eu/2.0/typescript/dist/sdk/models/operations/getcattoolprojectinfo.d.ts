import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCATToolProjectInfoRequest extends SpeakeasyBase {
    projectId: string;
}
export declare class GetCATToolProjectInfoResponse extends SpeakeasyBase {
    /**
     * Success
     */
    catToolProjectDTO?: shared.CATToolProjectDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
