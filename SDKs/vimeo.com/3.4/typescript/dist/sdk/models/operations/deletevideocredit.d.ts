import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVideoCreditSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVideoCreditRequest extends SpeakeasyBase {
    /**
     * The ID of the credit.
     */
    creditId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class DeleteVideoCreditResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user is neither the creator of the credit nor the credited user.
     */
    legacyError?: shared.LegacyError;
}
