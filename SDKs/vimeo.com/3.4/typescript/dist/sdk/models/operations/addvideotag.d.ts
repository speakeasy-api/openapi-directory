import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoTagSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoTagRequest extends SpeakeasyBase {
    /**
     * The ID of the video.
     */
    videoId: number;
    /**
     * The tag word.
     */
    word: string;
}
export declare class AddVideoTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * * The tag is invalid.
     *
     * @remarks
     * * An unsupported parameter was supplied.
     */
    legacyError?: shared.LegacyError;
    /**
     * The tag was added.
     */
    tag?: shared.Tag;
}
