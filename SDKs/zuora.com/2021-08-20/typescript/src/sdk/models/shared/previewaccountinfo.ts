import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreviewContactInfo } from "./previewcontactinfo";
import { TaxInfo } from "./taxinfo";



// PreviewAccountInfo
/** 
 * Information about the account that will own the order.
 * 
**/
export class PreviewAccountInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billCycleDay" })
  billCycleDay: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=soldToContact" })
  soldToContact?: PreviewContactInfo;

  @SpeakeasyMetadata({ data: "json, name=taxInfo" })
  taxInfo?: TaxInfo;
}
