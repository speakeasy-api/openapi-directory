import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateLocalSettingsRequest extends SpeakeasyBase {
    /**
     * Updated view's local settings (for current user).
     */
    localSettingsDTO: shared.LocalSettingsDTO;
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class UpdateLocalSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    localSettingsDTO?: shared.LocalSettingsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
