import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountTrustedDomainPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AccountTrustedDomainRequest extends SpeakeasyBase {
    pathParams: AccountTrustedDomainPathParams;
}
export declare class AccountTrustedDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountTrustedDomain200ApplicationJSONAny?: any;
}
