import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetInvoiceTaxItemType } from "./getinvoicetaxitemtype";



export class GetInvoiceTaxationItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetInvoiceTaxItemType })
  data?: GetInvoiceTaxItemType[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
