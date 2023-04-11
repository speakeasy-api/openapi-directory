import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVodPosterSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVodPosterRequest extends SpeakeasyBase {
    /**
     * The ID of the On Demand.
     */
    ondemandId: number;
}
export declare class AddVodPosterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can't modify another user's On Demand page.
     */
    legacyError?: shared.LegacyError;
    /**
     * The poster was added.
     */
    picture?: shared.Picture;
}
