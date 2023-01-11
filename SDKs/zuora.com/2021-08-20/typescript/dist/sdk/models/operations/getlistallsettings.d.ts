import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListAllSettingsHeaders extends SpeakeasyBase {
    accept?: string;
    authorization: string;
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetListAllSettingsRequest extends SpeakeasyBase {
    headers: GetListAllSettingsHeaders;
}
export declare class GetListAllSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    listAllSettingsResponse?: shared.ListAllSettingsResponse;
    statusCode: number;
}
