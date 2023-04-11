import { SpeakeasyBase } from "../../../internal/utils";
import { PreviewContactInfo } from "./previewcontactinfo";
import { TaxInfo } from "./taxinfo";
/**
 * Information about the account that will own the order.
 *
 * @remarks
 *
 */
export declare class PreviewAccountInfo extends SpeakeasyBase {
    /**
     * Day of the month that the account prefers billing periods to begin on. If set to 0, the bill cycle day will be set as "AutoSet".
     */
    billCycleDay: number;
    /**
     * ISO 3-letter currency code (uppercase). For example, USD.
     *
     * @remarks
     *
     */
    currency: string;
    /**
     * Container for custom fields of an Account object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    soldToContact?: PreviewContactInfo;
    /**
     * Information about the tax exempt status of a customer account.
     *
     * @remarks
     *
     */
    taxInfo?: TaxInfo;
}
