import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRevenueAutomationStartDateHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRevenueAutomationStartDateRequest extends SpeakeasyBase {
    headers: GetRevenueAutomationStartDateHeaders;
}
export declare class GetRevenueAutomationStartDateResponse extends SpeakeasyBase {
    contentType: string;
    getRevenueStartDateSettingType?: shared.GetRevenueStartDateSettingType;
    headers: Record<string, string[]>;
    statusCode: number;
}
