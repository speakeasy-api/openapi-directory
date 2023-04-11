import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LikeVideoAlt1Security extends SpeakeasyBase {
    oauth2: string;
}
export declare class LikeVideoAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class LikeVideoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authenticated user owns the video.
     */
    legacyError?: shared.LegacyError;
}
