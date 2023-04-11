import { Addresses } from "./addresses";
import { Clusters } from "./clusters";
import { CustomerProfiles } from "./customerprofiles";
import { Documents } from "./documents";
import { Indices } from "./indices";
import * as shared from "./models/shared";
import { Schemas } from "./schemas";
import { Scroll } from "./scroll";
import { Search } from "./search";
import { Versions } from "./versions";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://vtex.local", "https://{accountName}.{environment}.com.br"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * # ATTENTION: **This version isn't compliant with data entities of old version (e.g. CL and AD). It's possible to use this configuration only to new data entities.**
 *
 * @remarks
 *
 *
 * ## Welcome!
 *
 * VTEX Master Data is an easy-to-use, secure, fast, scalable and extensible repository. On it you can create your own Entities, store data and consult directly from the storefront or use it to store info for some external integration.
 *
 * There are internal VTEX modules that use VTEX Master Data as data repository. We have the VTEX Customer Service, VTEX Profile System and VTEX InStore, for example. It is also used by other internal services.
 *
 * There are two ways to use Master Data:
 *
 * 1. Directly from the storefront
 * 2. External integration
 *
 * ### Directly from the storefront
 *
 * If your scenario is to be used inside the storefront, be aware of the following observations:
 *
 * 1. Use the storefront host to query or store information to avoid **CORS**;
 * 2. Configure which information should be public and which shouldn't, inside the JSON Schema of the Data Entity;
 * 3. Do not create query loops (the storefront may be affected with Throttling and apis may be turned off as a security protection);
 * 4. Never add via JS any type of authentication key (x-vtex-api-appkey or x-vtex-api-apptoken);
 *
 * **It's important to avoid CORS using the relative path**
 *
 * ### External Integration
 *
 * If your scenario is to perform external integration, such as migrating client data from another service, be aware of the following observations:
 *
 * 1. Use the host ```{{accountName}}.vtexcommercestable.com.br```;
 * 2. Use the authentication keys (x-vtex-api-appkey ou x-vtex-api-apptoken);
 *
 * ### Most used attributes listed here
 *
 * | Name | Description |
 * | -------- | -------- |
 * | accountName | Account name in VTEX License Manager |
 * | name | Data Entity name |
 * | schema | JSON Schema of a Data Entity |
 * | id | Identifier of a document |
 * | x-vtex-api-appKey | User key |
 * | x-vtex-api-appToken | User token |
 */
export declare class SDK {
    addresses: Addresses;
    /**
     * Lets you know if a particular document is in one or more clusters.
     */
    clusters: Clusters;
    customerProfiles: CustomerProfiles;
    /**
     * The APIs within this group are used to save documents and query them by id.
     *
     * @remarks
     *
     * If the document has the id attribute or has fields that have been set to indexes with unique values, VTEX Master Data will attempt to identify the document. If the document is found a change will be made. If it is not found, an inclusion will be made. ** This scenario does not apply to the API with the POST verb**.
     *
     * Otherwise, a new document will always be created.
     *
     * You can use the query string `_where` to apply an update only if the document is compliant with the clause.
     *
     * In addition with this feature you can use the schema parameter `_schema` as a query string to apply the update only if the document is compliant with the schema. If the document is not compliant, the body of the response will have an array with each error, where the field ```Message``` indicates the type of the error.
     *
     * ### Response status code
     *
     * 1. Status Code 201: Document created successfully
     * 2. Status Code 200: Document changed successfully
     * 3. Status Code 304: There were no changes to the document
     * 4. Status Code 400: Invalid information in JSON
     * 5. Status Code 403: Unauthorized access
     *
     */
    documents: Documents;
    /**
     * Create alternative keys for data entities.
     */
    indices: Indices;
    schemas: Schemas;
    /**
     * The new `` scroll `` API has been developed to meet external integration scenarios. If you need to query the entire VTEX Master Data database, or your collection is over 10.000 documents, use this feature.
     */
    scroll: Scroll;
    /**
     * The ```search``` API is intended to query a collection of documents.
     */
    search: Search;
    /**
     * Master Data documents are versioned. This means that for each change a new version is generated. The `versions` APIs allows to query the versions and also apply the state of a document to the most current version.
     */
    versions: Versions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
