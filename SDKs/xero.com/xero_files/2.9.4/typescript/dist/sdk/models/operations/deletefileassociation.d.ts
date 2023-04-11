import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFileAssociationSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteFileAssociationRequest extends SpeakeasyBase {
    /**
     * File id for single object
     */
    fileId: string;
    /**
     * Object id for single object
     */
    objectId: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class DeleteFileAssociationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
