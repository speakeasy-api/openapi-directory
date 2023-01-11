import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDocumentPropertiesTypeDocumentTypeEnum {
    Invoice = "Invoice",
    CreditMemo = "CreditMemo",
    DebitMemo = "DebitMemo"
}


export class PostDocumentPropertiesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFileName" })
  customFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=documentId" })
  documentId?: string;

  @SpeakeasyMetadata({ data: "json, name=documentType" })
  documentType?: PostDocumentPropertiesTypeDocumentTypeEnum;
}
