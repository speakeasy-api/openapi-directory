import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEmbedPresetRequest extends SpeakeasyBase {
    /**
     * The ID of the preset.
     */
    presetId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class GetEmbedPresetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The embed preset was returned.
     */
    presets?: shared.Presets;
}
