import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Disable the outro.
 */
export declare enum EditEmbedPresetRequestBodyOutroEnum {
    Nothing = "nothing"
}
export declare class EditEmbedPresetRequestBody extends SpeakeasyBase {
    /**
     * Disable the outro.
     */
    outro?: EditEmbedPresetRequestBodyOutroEnum;
}
export declare class EditEmbedPresetRequest extends SpeakeasyBase {
    requestBody?: EditEmbedPresetRequestBody;
    /**
     * The ID of the preset.
     */
    presetId: number;
    /**
     * The ID of the user.
     */
    userId: number;
}
export declare class EditEmbedPresetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The outro type is invalid.
     */
    legacyError?: shared.LegacyError;
    /**
     * The embed preset was edited.
     */
    presets?: shared.Presets;
}
