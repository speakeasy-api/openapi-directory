import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadFile2Request extends SpeakeasyBase {
    /**
     * Uploaded file
     */
    fileToUploadDto: shared.FileToUploadDto;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UploadFile2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    fileDto?: shared.FileDto1;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
