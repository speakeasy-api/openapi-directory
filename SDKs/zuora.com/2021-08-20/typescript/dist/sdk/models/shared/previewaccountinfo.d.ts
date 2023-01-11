import { SpeakeasyBase } from "../../../internal/utils";
import { PreviewContactInfo } from "./previewcontactinfo";
import { TaxInfo } from "./taxinfo";
/**
 * Information about the account that will own the order.
 *
**/
export declare class PreviewAccountInfo extends SpeakeasyBase {
    billCycleDay: number;
    currency: string;
    customFields?: Record<string, any>;
    soldToContact?: PreviewContactInfo;
    taxInfo?: TaxInfo;
}
