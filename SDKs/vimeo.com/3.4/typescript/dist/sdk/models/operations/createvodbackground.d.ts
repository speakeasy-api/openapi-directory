import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateVodBackgroundSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateVodBackgroundRequest extends SpeakeasyBase {
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class CreateVodBackgroundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't modify an On Demand page that you don't own.
     */
    legacyError?: shared.LegacyError;
    /**
     * The background was created.
     */
    picture?: shared.Picture;
}
