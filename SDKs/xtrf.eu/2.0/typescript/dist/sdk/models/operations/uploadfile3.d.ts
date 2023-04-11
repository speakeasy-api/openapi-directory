import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadFile3Request extends SpeakeasyBase {
    /**
     * Uploaded file to the quote as a file uploaded by PM.
     */
    fileToUploadDto: shared.FileToUploadDto;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UploadFile3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    fileDto?: shared.FileDto1;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
