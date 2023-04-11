import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVideoTagSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVideoTagRequest extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
    /**
     * The tag word.
     */
    word: string;
}
export declare class DeleteVideoTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * A parameter is invalid.
     *
     * @remarks
     * * The tag is invalid.
     */
    legacyError?: shared.LegacyError;
}
