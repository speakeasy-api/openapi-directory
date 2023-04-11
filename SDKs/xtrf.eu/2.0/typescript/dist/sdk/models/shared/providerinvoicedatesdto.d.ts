import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDTO } from "./timedto";
export declare class ProviderInvoiceDatesDTO extends SpeakeasyBase {
    draftDate?: TimeDTO;
    finalDate?: TimeDTO;
    invoiceUploadedDate?: TimeDTO;
    paymentDueDate?: TimeDTO;
}
