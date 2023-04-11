import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEmbedPresetAlt1Request extends SpeakeasyBase {
    /**
     * The ID of the preset.
     */
    presetId: number;
}
export declare class GetEmbedPresetAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The embed preset was returned.
     */
    presets?: shared.Presets;
}
