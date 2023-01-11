import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCrsByCrsNumberPathParams extends SpeakeasyBase {
    crsNumber: string;
}
export declare class GetCrsByCrsNumberHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetCrsByCrsNumberRequest extends SpeakeasyBase {
    pathParams: GetCrsByCrsNumberPathParams;
    headers: GetCrsByCrsNumberHeaders;
}
export declare class GetCrsByCrsNumberResponse extends SpeakeasyBase {
    contentType: string;
    getChargeRSDetailType?: shared.GetChargeRsDetailType;
    headers: Record<string, string[]>;
    statusCode: number;
}
