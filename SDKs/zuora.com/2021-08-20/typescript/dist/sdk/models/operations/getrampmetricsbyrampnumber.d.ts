import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRampMetricsByRampNumberPathParams extends SpeakeasyBase {
    rampNumber: string;
}
export declare class GetRampMetricsByRampNumberHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRampMetricsByRampNumberRequest extends SpeakeasyBase {
    pathParams: GetRampMetricsByRampNumberPathParams;
    headers: GetRampMetricsByRampNumberHeaders;
}
export declare class GetRampMetricsByRampNumberResponse extends SpeakeasyBase {
    contentType: string;
    getRampMetricsByRampNumberResponseType?: shared.GetRampMetricsByRampNumberResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
