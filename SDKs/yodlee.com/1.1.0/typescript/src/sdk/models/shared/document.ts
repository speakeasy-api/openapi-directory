import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DocumentDocTypeEnum {
    Stmt = "STMT",
    Tax = "TAX",
    Ebill = "EBILL"
}


export class Document extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountID" })
  accountID?: number;

  @SpeakeasyMetadata({ data: "json, name=docType" })
  docType?: DocumentDocTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=formType" })
  formType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
