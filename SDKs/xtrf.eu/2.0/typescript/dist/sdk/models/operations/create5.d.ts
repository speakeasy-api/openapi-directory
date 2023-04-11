import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Create5Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectDTOv1?: shared.ProjectDTOv1;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
