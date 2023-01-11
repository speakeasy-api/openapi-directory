import { SpeakeasyBase } from "../../../internal/utils";
import { GetInvoiceTaxItemType } from "./getinvoicetaxitemtype";
export declare class GetInvoiceTaxationItemsResponse extends SpeakeasyBase {
    data?: GetInvoiceTaxItemType[];
    nextPage?: string;
    success?: boolean;
}
