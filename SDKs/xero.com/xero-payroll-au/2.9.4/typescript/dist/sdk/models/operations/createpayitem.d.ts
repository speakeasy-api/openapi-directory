import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePayItemSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreatePayItemRequest extends SpeakeasyBase {
    payItemInput: shared.PayItemInput;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreatePayItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful request - currently returns empty array for JSON
     */
    payItems?: shared.PayItems;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
