import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetBillingDocumentsResponseTypeDocumentTypeEnum {
    Invoice = "Invoice",
    CreditMemo = "CreditMemo",
    DebitMemo = "DebitMemo"
}

export enum GetBillingDocumentsResponseTypeStatusEnum {
    Draft = "Draft",
    Posted = "Posted",
    Canceled = "Canceled",
    Error = "Error"
}


export class GetBillingDocumentsResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=documentDate" })
  documentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=documentNumber" })
  documentNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=documentType" })
  documentType?: GetBillingDocumentsResponseTypeDocumentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetBillingDocumentsResponseTypeStatusEnum;
}
