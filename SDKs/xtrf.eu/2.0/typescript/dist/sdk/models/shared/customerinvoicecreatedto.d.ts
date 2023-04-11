import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomerInvoiceCreateDTOTypeEnum {
    Final = "FINAL",
    Draft = "DRAFT",
    CreditNote = "CREDIT_NOTE"
}
/**
 * Created new invoice.
 */
export declare class CustomerInvoiceCreateDTO extends SpeakeasyBase {
    prepaymentsIds?: number[];
    tasksIds?: number[];
    type?: CustomerInvoiceCreateDTOTypeEnum;
}
