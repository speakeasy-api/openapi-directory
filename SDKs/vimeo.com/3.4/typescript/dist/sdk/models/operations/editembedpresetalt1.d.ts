import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Disable the outro.
 */
export declare enum EditEmbedPresetAlt1RequestBodyOutroEnum {
    Nothing = "nothing"
}
export declare class EditEmbedPresetAlt1RequestBody extends SpeakeasyBase {
    /**
     * Disable the outro.
     */
    outro?: EditEmbedPresetAlt1RequestBodyOutroEnum;
}
export declare class EditEmbedPresetAlt1Request extends SpeakeasyBase {
    requestBody?: EditEmbedPresetAlt1RequestBody;
    /**
     * The ID of the preset.
     */
    presetId: number;
}
export declare class EditEmbedPresetAlt1Response extends SpeakeasyBase {
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
