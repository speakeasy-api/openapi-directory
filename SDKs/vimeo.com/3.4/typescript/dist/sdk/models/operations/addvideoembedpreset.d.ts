import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddVideoEmbedPresetSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AddVideoEmbedPresetRequest extends SpeakeasyBase {
    /**
     * The ID of the preset.
     */
    presetId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoEmbedPresetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
