import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTQuoteDocType extends SpeakeasyBase {
    /**
     * If not using Salesforce locale, this API Zuora user will be used to retrieve the locale from Zuora.
     *
     * @remarks
     *
     */
    apiuser?: string;
    /**
     * Type of the document to generate: `PDF` or `DOC`.
     *
     * @remarks
     *
     */
    documentType: string;
    /**
     * Salesforce locale value to use.
     *
     * @remarks
     *
     */
    locale?: string;
    password?: string;
    /**
     * ｜ Id of the quote。
     */
    quoteId: string;
    sandbox?: string;
    /**
     * SOAP URL used to login to Salesforce to get data. You can get the value with the following code in a Visualforce page: `{!$Api.Partner_Server_URL_100}`
     *
     * @remarks
     *
     */
    serverUrl: string;
    /**
     * Salesforce session id used to log in to Salesforce to get data. You can get the value with the following code in a Visualforce page: *{!$Api.Session_ID}*
     *
     * @remarks
     *
     */
    sessionId: string;
    /**
     * Id of the quote template in Zuora.
     *
     * @remarks
     *
     */
    templateId: string;
    token?: string;
    /**
     * If using Salesforce org locale, set this to a value that is not null.
     *
     * @remarks
     *
     */
    useSFDCLocale?: string;
    username?: string;
    /**
     * The major version number of Zuora Quotes you are generating the quote document in.
     *
     * @remarks
     * You can use a quote template with hierarchy sizes bigger than 3 if this is set to 7 or higher.
     *
     */
    zquotesMajorVersion?: string;
    /**
     * The minor version number of Zuora Quotes you are generating the quote document in.
     *
     * @remarks
     *
     */
    zquotesMinorVersion?: string;
}
