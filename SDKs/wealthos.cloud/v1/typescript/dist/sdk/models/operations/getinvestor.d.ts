import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvestorPathParams extends SpeakeasyBase {
    investorId: string;
}
export declare class GetInvestorHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetInvestorSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetInvestorRequest extends SpeakeasyBase {
    pathParams: GetInvestorPathParams;
    headers: GetInvestorHeaders;
    security: GetInvestorSecurity;
}
export declare class GetInvestorResponse extends SpeakeasyBase {
    contentType: string;
    rootTypeForInvestor?: any;
    statusCode: number;
    getInvestor400ApplicationJSONAny?: any;
    getInvestor401ApplicationJSONAny?: any;
    getInvestor403ApplicationJSONAny?: any;
    getInvestor404ApplicationJSONAny?: any;
    getInvestor429ApplicationJSONAny?: any;
    getInvestor500ApplicationJSONAny?: any;
}
