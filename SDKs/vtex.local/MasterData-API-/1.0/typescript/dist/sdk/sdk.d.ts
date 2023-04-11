import { Attachments } from "./attachments";
import { Clusters } from "./clusters";
import { DataEntities } from "./dataentities";
import { Documents } from "./documents";
import * as shared from "./models/shared";
import { Score } from "./score";
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
export declare class SDK {
    /**
     * The `attachments` API allows you to upload and download files.
     *
     * @remarks
     *
     * In case of images, the `content-type` header is filled with` image/jpg`.
     */
    attachments: Attachments;
    /**
     * Lets you know if a particular document is in one or more clusters.
     */
    clusters: Clusters;
    /**
     * Set of APIs that returns the structure of the data entities.
     */
    dataEntities: DataEntities;
    /**
     * The APIs within this group are used to save documents and query them by id.
     *
     * @remarks
     *
     * If the document has the id attribute or has fields that have been set to indexes with unique values, VTEX Master Data will attempt to identify the document. If the document is found a change will be made. If it is not found, an inclusion will be made. ** This scenario does not apply to the API with the POST verb**.
     *
     * Another important note: The id field will only be considered on the **POST** verb if the ID type entered in the Data Entity is the option:
     *
     * ```
     * A chave primária será informada pelo cliente através do atributo 'id'
     * ```
     *
     * Otherwise, a new document will always be created.
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
     * It allows to record and remove points in the` Score2` fields.
     */
    score: Score;
    /**
     * The new `` scroll `` API has been developed to meet external integration scenarios. If you need to query the entire VTEX Master Data database, or your collection is over 10.000 documents, use this feature.
     */
    scroll: Scroll;
    /**
     * The `search` API is intended to query a collection of documents.
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
