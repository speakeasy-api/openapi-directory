import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProcessSettingsBatchRequestHeaders extends SpeakeasyBase {
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostProcessSettingsBatchRequestRequest extends SpeakeasyBase {
    headers: PostProcessSettingsBatchRequestHeaders;
    request: shared.SettingsBatchRequest;
}
export declare class PostProcessSettingsBatchRequestResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    settingsBatchResponse?: shared.SettingsBatchResponse;
    statusCode: number;
}
