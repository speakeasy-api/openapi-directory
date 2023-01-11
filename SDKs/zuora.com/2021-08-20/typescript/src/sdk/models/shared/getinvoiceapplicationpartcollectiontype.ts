import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetInvoiceApplicationPartType } from "./getinvoiceapplicationparttype";



export class GetInvoiceApplicationPartCollectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationParts", elemType: GetInvoiceApplicationPartType })
  applicationParts?: GetInvoiceApplicationPartType[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
