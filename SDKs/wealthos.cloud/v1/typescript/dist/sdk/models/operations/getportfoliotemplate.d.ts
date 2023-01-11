import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfolioTemplatePathParams extends SpeakeasyBase {
    portfolioTemplateId: string;
}
export declare class GetPortfolioTemplateHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetPortfolioTemplateSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetPortfolioTemplateRequest extends SpeakeasyBase {
    pathParams: GetPortfolioTemplatePathParams;
    headers: GetPortfolioTemplateHeaders;
    security: GetPortfolioTemplateSecurity;
}
export declare class GetPortfolioTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPortfolioTemplate200ApplicationJSONAny?: any;
    getPortfolioTemplate401ApplicationJSONAny?: any;
    getPortfolioTemplate403ApplicationJSONAny?: any;
    getPortfolioTemplate404ApplicationJSONAny?: any;
    getPortfolioTemplate429ApplicationJSONAny?: any;
    getPortfolioTemplate500ApplicationJSONAny?: any;
}
