import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteInternalCallOutCountryPathParams extends SpeakeasyBase {
    accountId: string;
    countryId: string;
}
export declare class DeleteInternalCallOutCountryRequest extends SpeakeasyBase {
    pathParams: DeleteInternalCallOutCountryPathParams;
}
export declare class DeleteInternalCallOutCountryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteInternalCallOutCountry204ApplicationJSONAny?: any;
}
