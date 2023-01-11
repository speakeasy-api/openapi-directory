import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePortfolioTemplatePathParams extends SpeakeasyBase {
    portfolioTemplateId: string;
}
export declare class UpdatePortfolioTemplateHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class UpdatePortfolioTemplateSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class UpdatePortfolioTemplateRequest extends SpeakeasyBase {
    pathParams: UpdatePortfolioTemplatePathParams;
    headers: UpdatePortfolioTemplateHeaders;
    request: any;
    security: UpdatePortfolioTemplateSecurity;
}
export declare class UpdatePortfolioTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updatePortfolioTemplate200ApplicationJSONAny?: any;
    updatePortfolioTemplate400ApplicationJSONAny?: any;
    updatePortfolioTemplate401ApplicationJSONAny?: any;
    updatePortfolioTemplate403ApplicationJSONAny?: any;
    updatePortfolioTemplate404ApplicationJSONAny?: any;
    updatePortfolioTemplate409ApplicationJSONAny?: any;
    updatePortfolioTemplate429ApplicationJSONAny?: any;
    updatePortfolioTemplate500ApplicationJSONAny?: any;
}
