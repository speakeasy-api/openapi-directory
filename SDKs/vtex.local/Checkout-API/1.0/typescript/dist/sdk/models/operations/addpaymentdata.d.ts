import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddPaymentDataRequestBodyPayments extends SpeakeasyBase {
    /**
     * Payment system group.
     */
    group?: string;
    /**
     * Indicates whether billing address for this payment is the default address.
     */
    hasDefaultBillingAddress?: boolean;
    /**
     * Selected number of installments.
     */
    installments?: number;
    /**
     * Installments' interest rate.
     */
    installmentsInterestRate?: number;
    /**
     * Value of the installments.
     */
    installmentsValue?: number;
    /**
     * Payment system ID.
     */
    paymentSystem?: number;
    /**
     * Payment system name.
     */
    paymentSystemName?: string;
    /**
     * Reference value used to calculate total order value with interest.
     */
    referenceValue?: number;
    /**
     * Total value assigned to this payment.
     */
    value?: number;
}
export declare class AddPaymentDataRequestBody extends SpeakeasyBase {
    /**
     * Array with information on each payment chosen by the shopper.
     */
    payments?: AddPaymentDataRequestBodyPayments[];
}
export declare class AddPaymentDataRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: AddPaymentDataRequestBody;
    /**
     * ID of the orderForm that will receive client profile information.
     */
    orderFormId: string;
}
export declare class AddPaymentDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
