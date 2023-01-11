import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAmendmentsByKeyPathParams extends SpeakeasyBase {
    amendmentKey: string;
}
export declare class GetAmendmentsByKeyHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetAmendmentsByKeyRequest extends SpeakeasyBase {
    pathParams: GetAmendmentsByKeyPathParams;
    headers: GetAmendmentsByKeyHeaders;
}
export declare class GetAmendmentsByKeyResponse extends SpeakeasyBase {
    contentType: string;
    getAmendmentType?: shared.GetAmendmentType;
    headers: Record<string, string[]>;
    statusCode: number;
}
