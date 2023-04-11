import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditVodBackgroundSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class EditVodBackgroundRequestBody extends SpeakeasyBase {
    /**
     * Whether to make this background the active background.
     */
    active?: boolean;
}
export declare class EditVodBackgroundRequest extends SpeakeasyBase {
    requestBody?: EditVodBackgroundRequestBody;
    /**
     * The ID of the background.
     */
    backgroundId: number;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class EditVodBackgroundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't modify an On Demand page that you don't own.
     */
    legacyError?: shared.LegacyError;
    /**
     * The background was edited.
     */
    picture?: shared.Picture;
}
