import { Browser } from "./browser";
import { ClientInvoices } from "./clientinvoices";
import { Clients } from "./clients";
import { CurrencyExchangeRates } from "./currencyexchangerates";
import { Dictionaries } from "./dictionaries";
import { Files } from "./files";
import { JobsClassic } from "./jobsclassic";
import { JobsSmartV2 } from "./jobssmartv2";
import { License } from "./license";
import { Macros } from "./macros";
import * as shared from "./models/shared";
import { ProjectsClassic } from "./projectsclassic";
import { ProjectsSmartV2 } from "./projectssmartv2";
import { QuotesClassic } from "./quotesclassic";
import { QuotesSmartV2 } from "./quotessmartv2";
import { Reports } from "./reports";
import { Subscription } from "./subscription";
import { TasksClassic } from "./tasksclassic";
import { Users } from "./users";
import { VendorInvoices } from "./vendorinvoices";
import { Vendors } from "./vendors";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://presentation.s.xtrf.eu/home-api"];
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
 * XTRF Home Portal API enables you to perform operations on Projects, Quotes, Customers, Vendors etc. as a XTRF Home Portal user. <br>The documentation is generated from OpenAPI specification 3.0 available <a href="/home-api/openapi.json">here</a> <br>
 *
 * @remarks
 *   The API client/consumer code may be easily generated in 60+ programming languages using an open source code generator available at the time of writing this documentation at <a href='https://editor.swagger.io/'>https://editor.swagger.io/</a> Thank you for using XTRF Application Programming interface (XTRF API). By using the API you agree to the terms below. If you disagree with any of these terms, XTRF does not grant you a license to use the XTRF API. XTRF reserves the right to update and change these terms from time to time without a prior notice of API users. You can always find the most recent version of these terms here:
 */
export declare class SDK {
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    browser: Browser;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    clientInvoices: ClientInvoices;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    clients: Clients;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    currencyExchangeRates: CurrencyExchangeRates;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    dictionaries: Dictionaries;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    files: Files;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    jobsClassic: JobsClassic;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    jobsSmartV2: JobsSmartV2;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    license: License;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    macros: Macros;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    projectsClassic: ProjectsClassic;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    projectsSmartV2: ProjectsSmartV2;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    quotesClassic: QuotesClassic;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    quotesSmartV2: QuotesSmartV2;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    reports: Reports;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    subscription: Subscription;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    tasksClassic: TasksClassic;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    users: Users;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    vendorInvoices: VendorInvoices;
    /**
     * To change the description use /examples/TagsDescriptions.json
     */
    vendors: Vendors;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
