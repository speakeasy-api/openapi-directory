import { Docks } from "./docks";
import { FreightValues } from "./freightvalues";
import { Holidays } from "./holidays";
import { Inventory } from "./inventory";
import * as shared from "./models/shared";
import { PickupPoints } from "./pickuppoints";
import { Polygons } from "./polygons";
import { Reservations } from "./reservations";
import { ScheduledDelivery } from "./scheduleddelivery";
import { ShippingPolicies } from "./shippingpolicies";
import { Sla } from "./sla";
import { Warehouses } from "./warehouses";
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
 * >Check the [Fulfillment onboarding guide](https://developers.vtex.com/docs/guides/fulfillment). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about fulfillment and is organized by focusing on the developer's journey.
 *
 * Logistics or fulfillment is the module responsible for shipping calculation and inventory management.
 *
 * The variable `{{environment}}` can be filled with `vtexcommercestable` or `vtexcommercebeta`, depending on the environment you want to test.
 */
export declare class SDK {
    docks: Docks;
    freightValues: FreightValues;
    holidays: Holidays;
    inventory: Inventory;
    pickupPoints: PickupPoints;
    polygons: Polygons;
    reservations: Reservations;
    sla: Sla;
    scheduledDelivery: ScheduledDelivery;
    shippingPolicies: ShippingPolicies;
    warehouses: Warehouses;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
