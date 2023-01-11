import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePortfolioTemplateHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class CreatePortfolioTemplateSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class CreatePortfolioTemplateRequest extends SpeakeasyBase {
    headers: CreatePortfolioTemplateHeaders;
    request: any;
    security: CreatePortfolioTemplateSecurity;
}
export declare class CreatePortfolioTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createPortfolioTemplate201ApplicationJSONAny?: any;
    createPortfolioTemplate400ApplicationJSONAny?: any;
    createPortfolioTemplate401ApplicationJSONAny?: any;
    createPortfolioTemplate403ApplicationJSONAny?: any;
    createPortfolioTemplate404ApplicationJSONAny?: any;
    createPortfolioTemplate429ApplicationJSONAny?: any;
    createPortfolioTemplate500ApplicationJSONAny?: any;
}
