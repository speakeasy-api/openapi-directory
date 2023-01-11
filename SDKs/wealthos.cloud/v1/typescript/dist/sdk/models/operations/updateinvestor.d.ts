import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateInvestorPathParams extends SpeakeasyBase {
    investorId: string;
}
export declare class UpdateInvestorHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class UpdateInvestorSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class UpdateInvestorRequest extends SpeakeasyBase {
    pathParams: UpdateInvestorPathParams;
    headers: UpdateInvestorHeaders;
    request: any;
    security: UpdateInvestorSecurity;
}
export declare class UpdateInvestorResponse extends SpeakeasyBase {
    contentType: string;
    rootTypeForInvestor?: any;
    statusCode: number;
    updateInvestor400ApplicationJSONAny?: any;
    updateInvestor401ApplicationJSONAny?: any;
    updateInvestor403ApplicationJSONAny?: any;
    updateInvestor404ApplicationJSONAny?: any;
    updateInvestor409ApplicationJSONAny?: any;
    updateInvestor429ApplicationJSONAny?: any;
    updateInvestor500ApplicationJSONAny?: any;
}
