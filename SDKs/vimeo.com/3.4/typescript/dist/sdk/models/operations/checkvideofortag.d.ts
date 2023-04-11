import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckVideoForTagRequest extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
    /**
     * The tag word.
     */
    word: string;
}
export declare class CheckVideoForTagResponse extends SpeakeasyBase {
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
    /**
     * The tag has been added.
     */
    tag?: shared.Tag;
}
