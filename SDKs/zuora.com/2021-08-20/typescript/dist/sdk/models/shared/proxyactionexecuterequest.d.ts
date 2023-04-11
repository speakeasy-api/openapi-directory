import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the type of executed item.
 *
 * @remarks
 *
 */
export declare enum ProxyActionexecuteRequestTypeEnum {
    InvoiceSplit = "InvoiceSplit"
}
export declare class ProxyActionexecuteRequest extends SpeakeasyBase {
    /**
     * The ID of the object. **Values:** a valid InvoiceSplit object ID.
     *
     * @remarks
     *
     */
    ids: string[];
    /**
     * Indicates if the call is synchronous or asynchronous. **Values:** `false`
     *
     * @remarks
     *
     */
    synchronous: boolean;
    /**
     * Specifies the type of executed item.
     *
     * @remarks
     *
     */
    type: ProxyActionexecuteRequestTypeEnum;
}
