import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllPortfolioTemplatesHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetAllPortfolioTemplatesSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
/**
 * Array of all portfolio templates applicable to the investor
**/
export declare class GetAllPortfolioTemplates200ApplicationJson extends SpeakeasyBase {
    portfolioTemplates: any[];
}
export declare class GetAllPortfolioTemplatesRequest extends SpeakeasyBase {
    headers: GetAllPortfolioTemplatesHeaders;
    security: GetAllPortfolioTemplatesSecurity;
}
export declare class GetAllPortfolioTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllPortfolioTemplates200ApplicationJSONObject?: GetAllPortfolioTemplates200ApplicationJson;
    getAllPortfolioTemplates401ApplicationJSONAny?: any;
    getAllPortfolioTemplates403ApplicationJSONAny?: any;
    getAllPortfolioTemplates404ApplicationJSONAny?: any;
    getAllPortfolioTemplates429ApplicationJSONAny?: any;
    getAllPortfolioTemplates500ApplicationJSONAny?: any;
}
