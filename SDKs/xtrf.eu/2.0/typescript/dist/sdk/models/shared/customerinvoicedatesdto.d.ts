import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDTO } from "./timedto";
/**
 * Success
 */
export declare class CustomerInvoiceDatesDTO extends SpeakeasyBase {
    draftDate?: TimeDTO;
    finalDate?: TimeDTO;
    invoiceDate?: TimeDTO;
    paymentDueDate?: TimeDTO;
}
