import { SpeakeasyBase } from "../../../internal/utils";
import { ElectronicPaymentOptions } from "./electronicpaymentoptions";
import { ExternalPaymentOptions } from "./externalpaymentoptions";
import { InvoiceProcessingOptions } from "./invoiceprocessingoptions";
import { Amendment } from "./amendment";
/**
 * Use the `AmendOptions` container to specify billing options, such as invoice generation and when to process payments.
 *
**/
export declare class AmendRequestAmendOptions extends SpeakeasyBase {
    applicationOrder?: string[];
    applyCredit?: boolean;
    applyCreditBalance?: boolean;
    electronicPaymentOptions?: ElectronicPaymentOptions;
    externalPaymentOptions?: ExternalPaymentOptions;
    generateInvoice?: boolean;
    invoiceProcessingOptions?: InvoiceProcessingOptions;
    processPayments?: boolean;
}
/**
 * Use the `PreviewOptions` container to preview an amendment before committing its changes to a subscription.
 * You can use a preview to provide a quote of the new charges to a customer before the customer commits to the amended subscription.
 * For example, make an Amend call with an Amendment object that removes an existing rate plan,
 * another Amendment object that adds a new rate plan, and turn on the preview options.
 *
**/
export declare class AmendRequestPreviewOptions extends SpeakeasyBase {
    enablePreviewMode?: boolean;
    includeExistingDraftInvoiceItems?: boolean;
    numberOfPeriods?: number;
    previewThroughTermEnd?: boolean;
    previewType?: string;
}
export declare class AmendRequest extends SpeakeasyBase {
    amendOptions?: AmendRequestAmendOptions;
    amendments: Amendment[];
    previewOptions?: AmendRequestPreviewOptions;
}
