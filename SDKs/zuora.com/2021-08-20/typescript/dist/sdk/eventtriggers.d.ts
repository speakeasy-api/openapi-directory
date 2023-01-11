import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EventTriggers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteEventTrigger - Delete an event trigger
    **/
    deleteEventTrigger(req: operations.DeleteEventTriggerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventTriggerResponse>;
    /**
     * getEventTrigger - Retrieve an event trigger
    **/
    getEventTrigger(req: operations.GetEventTriggerRequest, config?: AxiosRequestConfig): Promise<operations.GetEventTriggerResponse>;
    /**
     * getEventTriggers - List event triggers
    **/
    getEventTriggers(req: operations.GetEventTriggersRequest, config?: AxiosRequestConfig): Promise<operations.GetEventTriggersResponse>;
    /**
     * postEventTrigger - Create an event trigger
     *
     * When you create an event trigger, you must specify the base object and define the trigger condition.
     *
     * ### Specify the base object
     * Use `baseObject` field to specify which object to define a trigger on. You can define an event trigger on any of the following objects:
     *
     *   * Account
     *   * AccountingCode
     *   * AccountingPeriod
     *   * Amendment
     *   * BillingRun
     *   * Contact
     *   * CreditBalanceAdjustment
     *   * CreditMemo
     *   * CreditMemoApplication
     *   * CreditMemoApplicationItem
     *   * CreditMemoItem
     *   * DebitMemo
     *   * DebitMemoItem
     *   * Feature
     *   * Invoice
     *   * InvoiceAdjustment
     *   * InvoiceItem
     *   * InvoiceItemAdjustment
     *   * JournalEntry
     *   * JournalEntryItem
     *   * Order
     *   * OrderAction
     *   * Payment
     *   * PaymentApplication
     *   * PaymentMethod
     *   * PaymentPart
     *   * Product
     *   * ProductFeature
     *   * ProductRatePlan
     *   * ProductRatePlanCharge
     *   * RatePlan
     *   * RatePlanCharge
     *   * Refund
     *   * RefundApplication
     *   * RevenueEvent
     *   * RevenueEventItem
     *   * RevenueSchedule
     *   * RevenueScheduleItem
     *   * Subscription
     *   * SubscriptionProductFeature
     *   * TaxationItem
     *   * Usage
     *
     * #### Tenant level base objects and tenant level event triggers
     * Zuora identifies the following base objects as the tenant level base objects:
     *
     *   * AccountingCode
     *   * AccountingPeriod
     *   * BillingRun
     *   * Feature
     *   * JournalEntry
     *   * JournalEntryItem
     *   * Product
     *   * ProductFeature
     *   * ProductRatePlan
     *   * ProductRatePlanCharge
     *
     * Event triggers defined on tenant level base objects are tenant level event triggers. Notifications associated with tenant level events are system notifications.
     *
     * **Note:** Tenant level event triggers and system notifications are only available in the default profile.
     *
     * ### Define the trigger condition
     * The `condition` field is a [JEXL](http://commons.apache.org/proper/commons-jexl/) expression that specifies when to trigger events. The expression can contain fields from the object that the trigger is defined on.
     *
     * **Note:** The condition cannot contain fields from [data source](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) objects that are joined to the object that the trigger is defined on.
     *
     * For example, the following condition causes an event to be triggered whenever an invoice is posted with an amount greater than 1000:
     *
     * ```changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000```
     *
     * Where:
     *
     *   * `changeType` is a keyword that specifies the type of change that occurred to the Invoice object. For all objects, the supported values of `changeType` are `INSERT`, `UPDATE`,  and `DELETE`.
     *   * `Invoice.Status` is the value of the Invoice object's `Status` field after the change occurred.
     *   * `Invoice.Status_old` is the value of the Invoice object's `Status` field before the change occurred.
     *
     * In the above example, the value of `baseObject` is `Invoice`.
     *
     * ### Limitations
     *
     * This event trigger has the following limitations:
     *
     * * The maximum number of event triggers is 20. If you want to increase the limit, submit a request at [Zuora Global Support](https://support.zuora.com).
     *
     * * The INSERT change type is not supported on RatePlan base objects.
     *
     * * The INSERT change type is not supported on SubscriptionProductFeature base objects.
     *
    **/
    postEventTrigger(req: operations.PostEventTriggerRequest, config?: AxiosRequestConfig): Promise<operations.PostEventTriggerResponse>;
    /**
     * putEventTrigger - Update an event trigger
    **/
    putEventTrigger(req: operations.PutEventTriggerRequest, config?: AxiosRequestConfig): Promise<operations.PutEventTriggerResponse>;
}
