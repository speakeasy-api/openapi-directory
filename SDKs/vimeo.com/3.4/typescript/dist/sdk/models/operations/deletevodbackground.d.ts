import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVodBackgroundSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVodBackgroundRequest extends SpeakeasyBase {
    /**
     * The ID of the background.
     */
    backgroundId: number;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class DeleteVodBackgroundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If you are attempting to modify an On Demand page you don't own.
     */
    legacyError?: shared.LegacyError;
    /**
     * The background image was deleted.
     */
    picture?: shared.Picture;
}
