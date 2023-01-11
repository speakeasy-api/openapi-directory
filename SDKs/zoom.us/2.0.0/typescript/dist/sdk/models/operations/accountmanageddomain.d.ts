import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountManagedDomainPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AccountManagedDomainSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AccountManagedDomain200ApplicationJsonDomains extends SpeakeasyBase {
    domain?: string;
    status?: string;
}
/**
 * List of managed domains.
**/
export declare class AccountManagedDomain200ApplicationJson extends SpeakeasyBase {
    domains?: AccountManagedDomain200ApplicationJsonDomains[];
    totalRecords?: number;
}
export declare class AccountManagedDomainRequest extends SpeakeasyBase {
    pathParams: AccountManagedDomainPathParams;
    security: AccountManagedDomainSecurity;
}
export declare class AccountManagedDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountManagedDomain200ApplicationJSONObject?: AccountManagedDomain200ApplicationJson;
}
