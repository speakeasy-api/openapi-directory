import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ElectronicPaymentOptions } from "./electronicpaymentoptions";
import { ExternalPaymentOptions } from "./externalpaymentoptions";
import { InvoiceProcessingOptions } from "./invoiceprocessingoptions";
import { Amendment } from "./amendment";



// AmendRequestAmendOptions
/** 
 * Use the `AmendOptions` container to specify billing options, such as invoice generation and when to process payments.
 * 
**/
export class AmendRequestAmendOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationOrder" })
  applicationOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=ApplyCredit" })
  applyCredit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ApplyCreditBalance" })
  applyCreditBalance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ElectronicPaymentOptions" })
  electronicPaymentOptions?: ElectronicPaymentOptions;

  @SpeakeasyMetadata({ data: "json, name=ExternalPaymentOptions" })
  externalPaymentOptions?: ExternalPaymentOptions;

  @SpeakeasyMetadata({ data: "json, name=GenerateInvoice" })
  generateInvoice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InvoiceProcessingOptions" })
  invoiceProcessingOptions?: InvoiceProcessingOptions;

  @SpeakeasyMetadata({ data: "json, name=ProcessPayments" })
  processPayments?: boolean;
}


// AmendRequestPreviewOptions
/** 
 * Use the `PreviewOptions` container to preview an amendment before committing its changes to a subscription. 
 * You can use a preview to provide a quote of the new charges to a customer before the customer commits to the amended subscription. 
 * For example, make an Amend call with an Amendment object that removes an existing rate plan, 
 * another Amendment object that adds a new rate plan, and turn on the preview options.
 * 
**/
export class AmendRequestPreviewOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnablePreviewMode" })
  enablePreviewMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeExistingDraftInvoiceItems" })
  includeExistingDraftInvoiceItems?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NumberOfPeriods" })
  numberOfPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=PreviewThroughTermEnd" })
  previewThroughTermEnd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PreviewType" })
  previewType?: string;
}


export class AmendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AmendOptions" })
  amendOptions?: AmendRequestAmendOptions;

  @SpeakeasyMetadata({ data: "json, name=Amendments", elemType: Amendment })
  amendments: Amendment[];

  @SpeakeasyMetadata({ data: "json, name=PreviewOptions" })
  previewOptions?: AmendRequestPreviewOptions;
}
