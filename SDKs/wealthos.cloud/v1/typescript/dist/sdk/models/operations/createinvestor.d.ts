import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateInvestorHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class CreateInvestorSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class CreateInvestorRequest extends SpeakeasyBase {
    headers: CreateInvestorHeaders;
    request: any;
    security: CreateInvestorSecurity;
}
export declare class CreateInvestorResponse extends SpeakeasyBase {
    contentType: string;
    rootTypeForInvestorCreationResponse?: any;
    statusCode: number;
    createInvestor400ApplicationJSONAny?: any;
    createInvestor401ApplicationJSONAny?: any;
    createInvestor403ApplicationJSONAny?: any;
    createInvestor429ApplicationJSONAny?: any;
    createInvestor500ApplicationJSONAny?: any;
}
