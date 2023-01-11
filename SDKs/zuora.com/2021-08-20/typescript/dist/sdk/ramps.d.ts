import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ramps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRampByRampNumber - Retrieve a ramp
     *
     * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     *
     * Retrieves the latest definition of a specified ramp.
     *
    **/
    getRampByRampNumber(req: operations.GetRampByRampNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetRampByRampNumberResponse>;
    /**
     * getRampMetricsByOrderNumber - List ramp metrics by order number
     *
     * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     *
     * Retrieves key ramp metrics about a specified order, including the following metrics:
     *
     * * TCB, TCV in the Ramp level
     * * TCB, TCV in the Interval level
     * * TCB, TCV, Quantity, and MRR in Interval Metrics
     * * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
     *
     * See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
     *
    **/
    getRampMetricsByOrderNumber(req: operations.GetRampMetricsByOrderNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetRampMetricsByOrderNumberResponse>;
    /**
     * getRampMetricsByRampNumber - List all ramp metrics of a ramp
     *
     * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     *
     * Retrieves key metrics about a specified ramp, including the following metrics:
     *
     * * TCB, TCV in the Ramp level
     * * TCB, TCV in the Interval level
     * * TCB, TCV, Quantity, and MRR in Interval Metrics
     * * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
     *
     * See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
     *
    **/
    getRampMetricsByRampNumber(req: operations.GetRampMetricsByRampNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetRampMetricsByRampNumberResponse>;
    /**
     * getRampMetricsBySubscriptionKey - List ramp metrics by subscription key
     *
     * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     *
     * Retrieves key ramp metrics about a specified subscription, including the following metrics:
     *
     * * TCB, TCV in the Ramp level
     * * TCB, TCV in the Interval level
     * * TCB, TCV, Quantity, and MRR in Interval Metrics
     * * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
     *
     * See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
     *
    **/
    getRampMetricsBySubscriptionKey(req: operations.GetRampMetricsBySubscriptionKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetRampMetricsBySubscriptionKeyResponse>;
    /**
     * getRampsBySubscriptionKey - Retrieve a ramp by subscription key
     *
     * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     *
     *  Retrieves the definition of the ramp associated with a specified subscription.
     *
    **/
    getRampsBySubscriptionKey(req: operations.GetRampsBySubscriptionKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetRampsBySubscriptionKeyResponse>;
}
