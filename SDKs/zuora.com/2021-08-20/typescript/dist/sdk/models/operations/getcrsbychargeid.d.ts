import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCrsByChargeIdPathParams extends SpeakeasyBase {
    chargeKey: string;
}
export declare class GetCrsByChargeIdHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetCrsByChargeIdRequest extends SpeakeasyBase {
    pathParams: GetCrsByChargeIdPathParams;
    headers: GetCrsByChargeIdHeaders;
}
export declare class GetCrsByChargeIdResponse extends SpeakeasyBase {
    contentType: string;
    getChargeRSDetailType?: shared.GetChargeRsDetailType;
    headers: Record<string, string[]>;
    statusCode: number;
}
