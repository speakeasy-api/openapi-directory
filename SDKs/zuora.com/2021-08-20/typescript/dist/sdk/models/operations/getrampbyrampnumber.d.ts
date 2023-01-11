import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRampByRampNumberPathParams extends SpeakeasyBase {
    rampNumber: string;
}
export declare class GetRampByRampNumberHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRampByRampNumberRequest extends SpeakeasyBase {
    pathParams: GetRampByRampNumberPathParams;
    headers: GetRampByRampNumberHeaders;
}
export declare class GetRampByRampNumberResponse extends SpeakeasyBase {
    contentType: string;
    getRampByRampNumberResponseType?: shared.GetRampByRampNumberResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
