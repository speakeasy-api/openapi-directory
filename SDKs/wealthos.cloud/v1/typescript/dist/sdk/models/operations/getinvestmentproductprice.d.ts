import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInvestmentProductPriceCategoryIdEnum {
    Funds = "funds"
}
export declare class GetInvestmentProductPricePathParams extends SpeakeasyBase {
    categoryId: GetInvestmentProductPriceCategoryIdEnum;
    investmentProductId: string;
}
export declare class GetInvestmentProductPriceHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetInvestmentProductPriceSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetInvestmentProductPriceRequest extends SpeakeasyBase {
    pathParams: GetInvestmentProductPricePathParams;
    headers: GetInvestmentProductPriceHeaders;
    security: GetInvestmentProductPriceSecurity;
}
export declare class GetInvestmentProductPriceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getInvestmentProductPrice200ApplicationJSONAny?: any;
    getInvestmentProductPrice401ApplicationJSONAny?: any;
    getInvestmentProductPrice403ApplicationJSONAny?: any;
    getInvestmentProductPrice404ApplicationJSONAny?: any;
    getInvestmentProductPrice429ApplicationJSONAny?: any;
    getInvestmentProductPrice500ApplicationJSONAny?: any;
}
