import { Configuration } from "./configuration";
import { Installments } from "./installments";
import * as shared from "./models/shared";
import { TransactionFlow } from "./transactionflow";
import { TransactionProcess } from "./transactionprocess";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://vtex.local", "https://{accountName}.vtexpayments.com.br"];
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
 * >ℹ️ Onboarding guide
 *
 * @remarks
 * >
 * > Check the new [Payments onboarding guide](https://developers.vtex.com/docs/guides/payments-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Payments and is organized by focusing on the developer's journey.
 *
 * The Payments Gateway API allows you to get payment data and process your store's transactions.
 */
export declare class SDK {
    configuration: Configuration;
    /**
     * We provided payment methods configuration that allow our sellers to configure installment options and from that configuration we generate an installment service.
     */
    installments: Installments;
    /**
     * After one transaction is authorized, there is remaining to do some calls in order to complete a transaction and its payments. We explain the settle process, cancel authorized payments process, and refund process by using examples.
     */
    transactionFlow: TransactionFlow;
    /**
     * This is meant to explain the requests that are necessary to complete a transaction using PCI Gateway.
     */
    transactionProcess: TransactionProcess;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
