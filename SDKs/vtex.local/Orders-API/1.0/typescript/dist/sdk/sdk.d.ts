import { ChangeSeller } from "./changeseller";
import { Conversation } from "./conversation";
import { ExportOrderReport } from "./exportorderreport";
import { FeedV2Deprecated } from "./feedv2deprecated";
import { FeedV3 } from "./feedv3";
import { Invoice } from "./invoice";
import * as shared from "./models/shared";
import { OrderHook } from "./orderhook";
import { Orders } from "./orders";
import { Payment } from "./payment";
import { Tracking } from "./tracking";
import { UserOrders } from "./userorders";
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
 *
 * @remarks
 *
 * >Check the new [Orders onboarding guide](https://developers.vtex.com/docs/guides/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
 *
 * Receive, process, and manage every order in your store through our Order Management API.
 */
export declare class SDK {
    changeSeller: ChangeSeller;
    conversation: Conversation;
    exportOrderReport: ExportOrderReport;
    feedV2Deprecated: FeedV2Deprecated;
    feedV3: FeedV3;
    invoice: Invoice;
    orderHook: OrderHook;
    orders: Orders;
    payment: Payment;
    tracking: Tracking;
    userOrders: UserOrders;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
