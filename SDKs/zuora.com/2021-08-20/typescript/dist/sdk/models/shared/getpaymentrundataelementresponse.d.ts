import { SpeakeasyBase } from "../../../internal/utils";
import { GETPaymentRunDataTransactionElementResponse } from "./getpaymentrundatatransactionelementresponse";
/**
 * The billing document type specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
 *
 * @remarks
 *
 */
export declare enum GETPaymentRunDataElementResponseDocumentTypeEnum {
    Invoice = "Invoice",
    DebitMemo = "DebitMemo"
}
/**
 * Indicates whether the data is processed successfully or not.
 *
 * @remarks
 *
 */
export declare enum GETPaymentRunDataElementResponseResultEnum {
    Processed = "Processed",
    Error = "Error"
}
export declare class GETPaymentRunDataElementResponse extends SpeakeasyBase {
    /**
     * The customer account ID specified in the `data` field when creating the payment run.
     *
     * @remarks
     *
     */
    accountId?: string;
    /**
     * The amount specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The amount that is collected.
     *
     * @remarks
     *
     */
    amountCollected?: number;
    /**
     * The amount to be collected.
     *
     * @remarks
     *
     */
    amountToCollect?: number;
    /**
     * The comment specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * The billing document ID specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
     *
     * @remarks
     *
     */
    documentId?: string;
    /**
     * The billing document type specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
     *
     * @remarks
     *
     */
    documentType?: GETPaymentRunDataElementResponseDocumentTypeEnum;
    /**
     * The error code of the response.
     *
     * @remarks
     *
     */
    errorCode?: string;
    /**
     * The detailed information of the error response.
     *
     * @remarks
     *
     */
    errorMessage?: string;
    /**
     * The payment gateway ID specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
     *
     * @remarks
     *
     */
    paymentGatewayId?: string;
    /**
     * The payment method ID specified in the `data` field when creating the payment run. `null` is returned if it was not specified.
     *
     * @remarks
     *
     */
    paymentMethodId?: string;
    /**
     * Indicates whether the data is processed successfully or not.
     *
     * @remarks
     *
     */
    result?: GETPaymentRunDataElementResponseResultEnum;
    /**
     * Container for transactions that apply to the current request. Each element contains an array of the settlement/payment applied to the record.
     *
     * @remarks
     *
     */
    transactions?: GETPaymentRunDataTransactionElementResponse[];
}
