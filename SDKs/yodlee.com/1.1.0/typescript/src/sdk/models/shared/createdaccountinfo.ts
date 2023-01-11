import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatedAccountInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
