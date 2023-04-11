import { SpeakeasyBase } from "../../../internal/utils";
import { GETARPaymentTypewithSuccess } from "./getarpaymenttypewithsuccess";
export declare class PaymentCollectionResponseType extends SpeakeasyBase {
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Container for payments.
     *
     * @remarks
     *
     */
    payments?: GETARPaymentTypewithSuccess[];
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
