import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRampMetricsByOrderNumberPathParams extends SpeakeasyBase {
    orderNumber: string;
}
export declare class GetRampMetricsByOrderNumberHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRampMetricsByOrderNumberRequest extends SpeakeasyBase {
    pathParams: GetRampMetricsByOrderNumberPathParams;
    headers: GetRampMetricsByOrderNumberHeaders;
}
export declare class GetRampMetricsByOrderNumberResponse extends SpeakeasyBase {
    contentType: string;
    getRampMetricsByOrderNumberResponseType?: shared.GetRampMetricsByOrderNumberResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
