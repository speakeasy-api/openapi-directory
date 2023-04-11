import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateFileAssociationSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateFileAssociationRequest extends SpeakeasyBase {
    association?: shared.Association;
    /**
     * File id for single object
     */
    fileId: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreateFileAssociationResponse extends SpeakeasyBase {
    /**
     * A successful request
     */
    association?: shared.Association;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
