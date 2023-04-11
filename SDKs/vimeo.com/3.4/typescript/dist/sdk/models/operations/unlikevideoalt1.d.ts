import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnlikeVideoAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class UnlikeVideoAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class UnlikeVideoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user can't like videos.
     */
    legacyError?: shared.LegacyError;
}
