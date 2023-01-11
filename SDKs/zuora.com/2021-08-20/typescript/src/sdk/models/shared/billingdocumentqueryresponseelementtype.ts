import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetBillingDocumentsResponseType } from "./getbillingdocumentsresponsetype";



export class BillingDocumentQueryResponseElementType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GetBillingDocumentsResponseType })
  documents?: GetBillingDocumentsResponseType[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
