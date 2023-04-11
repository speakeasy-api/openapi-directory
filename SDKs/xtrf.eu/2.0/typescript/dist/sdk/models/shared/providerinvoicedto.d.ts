import { SpeakeasyBase } from "../../../internal/utils";
import { ProviderInvoiceDatesDTO } from "./providerinvoicedatesdto";
export declare enum ProviderInvoiceDTOPaymentStatusEnum {
    NotPaid = "NOT_PAID",
    FullyPaid = "FULLY_PAID",
    Irrecoverable = "IRRECOVERABLE",
    PartiallyPaid = "PARTIALLY_PAID"
}
export declare enum ProviderInvoiceDTOStatusEnum {
    Postponed = "POSTPONED",
    ToBeSent = "TO_BE_SENT",
    Sent = "SENT",
    Confirmed = "CONFIRMED",
    BillCreated = "BILL_CREATED"
}
/**
 * Success
 */
export declare class ProviderInvoiceDTO extends SpeakeasyBase {
    currencyId?: number;
    dates?: ProviderInvoiceDatesDTO;
    draftNumber?: string;
    finalNumber?: string;
    id?: number;
    internalNumber?: string;
    jobsNetValue?: number;
    notesFromProvider?: string;
    paymentStatus?: ProviderInvoiceDTOPaymentStatusEnum;
    providerId?: number;
    status?: ProviderInvoiceDTOStatusEnum;
    totalGross?: number;
    totalGrossInWords?: string;
    totalNetto?: number;
}
