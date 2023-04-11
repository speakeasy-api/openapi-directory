import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentConfiguration } from "./paymentconfiguration";
export declare class UpdateorderFormconfigurationRequestApps extends SpeakeasyBase {
    /**
     * Array of fields available to the app.
     */
    fields?: string[];
    /**
     * App ID.
     */
    id?: string;
    /**
     * App major version.
     */
    major?: number;
}
/**
 * External tax service configuration.
 */
export declare class UpdateorderFormconfigurationRequestTaxConfiguration extends SpeakeasyBase {
    /**
     * Custom data ID sent to the tax system.
     */
    appId?: string;
    /**
     * Authorization header.
     */
    authorizationHeader?: string;
    /**
     * Endpoint URL.
     */
    url?: string;
}
export declare class UpdateorderFormconfigurationRequest extends SpeakeasyBase {
    /**
     * Allows the editing of SKU prices right in the cart.
     */
    allowManualPrice: boolean;
    /**
     * On the same purchase, allows the selection of items from multiple delivery channels.
     */
    allowMultipleDeliveries: boolean;
    /**
     * Array of objects containing Apps configuration information.
     */
    apps: UpdateorderFormconfigurationRequestApps[];
    /**
     * Number of price digits.
     */
    decimalDigitsPrecision: number;
    /**
     * Allows, on a first purchase, masking client's data. It could be useful when a shared cart is used and the client doesn't want to share its data.
     */
    maskFirstPurchaseData?: boolean;
    /**
     * Allows the input of a limit of white label sellers involved on the cart.
     */
    maxNumberOfWhiteLabelSellers?: number;
    /**
     * Minimum SKU quantity by cart.
     */
    minimumQuantityAccumulatedForItems: number;
    /**
     * Minimum cart value.
     */
    minimumValueAccumulated: number;
    /**
     * Payment Configuration object
     */
    paymentConfiguration: PaymentConfiguration;
    /**
     * If you want to apply a first installment discount to a particular payment system, set this field to that payment system's ID. Learn more: [Configuring a discount for orders prepaid in full](https://help.vtex.com/en/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt).
     */
    paymentSystemToCheckFirstInstallment?: string;
    /**
     * Configures reCAPTCHA validation for the account, defining in which situations the shopper will be prompted to validate a purchase with reCAPTCHA. Learn more about [reCAPTCHA validation for VTEX stores](https://help.vtex.com/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP)
     *
     * @remarks
     *
     *
  Possible values are:
     *
  - `"never"`: no purchases are validated with reCAPTCHA.
     *
  - `"always"`: every purchase is validated with reCAPTCHA.
     *
  - `"vtexCriteria"`: only some purchases are validated with reCAPTCHA in order to minimize friction and improve shopping experience. VTEX’s algorithm determines which sessions are trustworthy and which should be validated with reCAPTCHA. This is the recommended option.
     */
    recaptchaValidation?: string;
    /**
     * External tax service configuration.
     */
    taxConfiguration: UpdateorderFormconfigurationRequestTaxConfiguration;
}
