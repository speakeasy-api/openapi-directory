import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerDetailsDTO } from "./customerdetailsdto";
import { CustomerInvoiceDatesDTO } from "./customerinvoicedatesdto";
import { PaymentTermsDTO } from "./paymenttermsdto";
import { TaskDTO } from "./taskdto";
export declare enum CustomerInvoiceDTOStatusEnum {
    NotReady = "NOT_READY",
    Ready = "READY",
    Sent = "SENT"
}
export declare enum CustomerInvoiceDTOTypeEnum {
    Final = "FINAL",
    Draft = "DRAFT",
    CreditNote = "CREDIT_NOTE"
}
export declare enum CustomerInvoiceDTOVatCalculationRuleEnum {
    SumItems = "SUM_ITEMS",
    ByNetTotal = "BY_NET_TOTAL"
}
/**
 * Success
 */
export declare class CustomerInvoiceDTO extends SpeakeasyBase {
    currencyId?: number;
    customerDetails?: CustomerDetailsDTO;
    customerId?: number;
    dates?: CustomerInvoiceDatesDTO;
    id?: number;
    invoiceNumber?: string;
    paymentMethodId?: number;
    paymentTerms?: PaymentTermsDTO;
    status?: CustomerInvoiceDTOStatusEnum;
    tasks?: TaskDTO[];
    tasksValue?: number;
    totalGross?: number;
    totalInWords?: string;
    totalNetto?: number;
    type?: CustomerInvoiceDTOTypeEnum;
    vatCalculationRule?: CustomerInvoiceDTOVatCalculationRuleEnum;
}
