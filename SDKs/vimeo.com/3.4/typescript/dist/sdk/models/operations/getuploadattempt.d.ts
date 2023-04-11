import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUploadAttemptSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetUploadAttemptRequest extends SpeakeasyBase {
    /**
     * The ID of the upload attempt.
     */
    upload: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetUploadAttemptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The upload attempt was returned.
     */
    uploadAttempt?: shared.UploadAttempt;
}
