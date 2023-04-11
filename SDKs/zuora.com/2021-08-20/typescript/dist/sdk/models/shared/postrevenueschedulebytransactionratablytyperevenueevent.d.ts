import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Revenue Event object.
 *
 * @remarks
 *
 */
export declare class POSTRevenueScheduleByTransactionRatablyTypeRevenueEvent extends SpeakeasyBase {
    /**
     * The label of the revenue event type. Revenue event type labels can be duplicated. You can configure your revenue event type labels by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
     *
     * @remarks
     *
     * Note that `Credit Memo Posted` and `Debit Memo Posted` are only available if you enable the Invoice Settlement feature.
     *
     */
    eventType?: string;
    /**
     * System ID of the revenue event type. Each eventType has a unique system ID. You can configure your revenue event type system IDs by navigating to **Settings > Finance > Configure Revenue Event Types** in the Zuora UI.
     *
     * @remarks
     *
     * Required only if there is more than one revenue event type with the same label.
     *
     */
    eventTypeSystemId?: string;
    /**
     * Additional information about the revenue event.
     *
     * @remarks
     *
     */
    notes?: string;
}
