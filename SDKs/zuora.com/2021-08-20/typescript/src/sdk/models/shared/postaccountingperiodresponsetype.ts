import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAccountingPeriodResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
