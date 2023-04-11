import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteVideoEmbedPresetSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteVideoEmbedPresetRequest extends SpeakeasyBase {
    /**
     * The ID of the preset.
     */
    presetId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class DeleteVideoEmbedPresetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such video or embed preset exists.
     */
    legacyError?: shared.LegacyError;
}
