import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSettingsRequest extends SpeakeasyBase {
    /**
     * Updated view's settings.
     */
    settingsDTO: shared.SettingsDTO;
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class UpdateSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    settingsDTO?: shared.SettingsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
