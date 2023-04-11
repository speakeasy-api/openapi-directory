import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Create6Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectDTOv2?: shared.ProjectDTOv2;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
