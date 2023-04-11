import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatepartialinvoiceSendTrackingNumberRequest extends SpeakeasyBase {
    /**
     * The name of the carrier responsible for delivering the order.
     */
    courier: string;
    /**
     * Date when the package was dispatched. For example, 2023-01-08T13:16:13.4617653+00:00.
     */
    dispatchedDate: string;
    /**
     * The number code that identifies the order tracking.
     */
    trackingNumber: string;
    /**
     * Package tracking URL.
     */
    trackingUrl: string;
}
