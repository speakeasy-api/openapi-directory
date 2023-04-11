import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVodBackgroundRequest extends SpeakeasyBase {
    /**
     * The ID of the background.
     */
    backgroundId: number;
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class GetVodBackgroundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't view another user's On Demand page background.
     */
    legacyError?: shared.LegacyError;
    /**
     * The background image was returned.
     */
    picture?: shared.Picture;
}
