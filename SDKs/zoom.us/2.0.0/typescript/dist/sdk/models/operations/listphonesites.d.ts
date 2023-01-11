import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListPhoneSitesQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
}
/**
 * Site country
**/
export declare class ListPhoneSites200ApplicationJsonSitesCountry extends SpeakeasyBase {
    code?: string;
    name?: string;
}
/**
 * Auto Receptionist for each site.
**/
export declare class ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist extends SpeakeasyBase {
    extensionId?: string;
    extensionNumber?: string;
    id?: string;
    name?: string;
}
export declare class ListPhoneSites200ApplicationJsonSites extends SpeakeasyBase {
    country?: ListPhoneSites200ApplicationJsonSitesCountry;
    id?: string;
    mainAutoReceptionist?: ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist;
    name?: string;
    siteCode?: string;
}
export declare class ListPhoneSites200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: string;
    sites?: ListPhoneSites200ApplicationJsonSites[];
    totalRecords?: string;
}
export declare class ListPhoneSitesRequest extends SpeakeasyBase {
    queryParams: ListPhoneSitesQueryParams;
}
export declare class ListPhoneSitesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listPhoneSites200ApplicationJSONObject?: ListPhoneSites200ApplicationJson;
}
