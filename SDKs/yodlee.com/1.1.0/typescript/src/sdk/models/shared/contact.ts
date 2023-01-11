import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;
}
