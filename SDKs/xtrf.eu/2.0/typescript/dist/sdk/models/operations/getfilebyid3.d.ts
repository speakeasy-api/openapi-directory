import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFileById3Request extends SpeakeasyBase {
    /**
     * file's internal identifier
     */
    fileId: string;
}
export declare class GetFileById3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectFileDto?: shared.ProjectFileDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
