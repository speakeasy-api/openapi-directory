import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDocumentPropertiesResponseTypeDocumentTypeEnum {
    Invoice = "Invoice",
    CreditMemo = "CreditMemo",
    DebitMemo = "DebitMemo"
}


export class GetDocumentPropertiesResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFileName" })
  customFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=documentId" })
  documentId?: string;

  @SpeakeasyMetadata({ data: "json, name=documentType" })
  documentType?: GetDocumentPropertiesResponseTypeDocumentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
