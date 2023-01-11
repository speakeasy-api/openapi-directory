import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInvestmentProductCategoryIdEnum {
    Funds = "funds"
}
export declare class GetInvestmentProductPathParams extends SpeakeasyBase {
    categoryId: GetInvestmentProductCategoryIdEnum;
    investmentProductId: string;
}
export declare class GetInvestmentProductHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetInvestmentProductSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetInvestmentProductRequest extends SpeakeasyBase {
    pathParams: GetInvestmentProductPathParams;
    headers: GetInvestmentProductHeaders;
    security: GetInvestmentProductSecurity;
}
export declare class GetInvestmentProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getInvestmentProduct200ApplicationJSONAny?: any;
    getInvestmentProduct401ApplicationJSONAny?: any;
    getInvestmentProduct403ApplicationJSONAny?: any;
    getInvestmentProduct404ApplicationJSONAny?: any;
    getInvestmentProduct429ApplicationJSONAny?: any;
    getInvestmentProduct500ApplicationJSONAny?: any;
}
