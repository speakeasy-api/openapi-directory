import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditVideoCreditSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class EditVideoCreditRequestBody extends SpeakeasyBase {
    /**
     * The name of the person being credited.
     */
    name?: string;
    /**
     * The role of the person being credited.
     */
    role?: string;
}
export declare class EditVideoCreditRequest extends SpeakeasyBase {
    requestBody?: EditVideoCreditRequestBody;
    /**
     * The ID of the credit.
     */
    creditId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class EditVideoCreditResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The credit was edited.
     */
    credit?: shared.Credit;
    /**
     * A parameter is invalid.
     */
    legacyError?: shared.LegacyError;
}
