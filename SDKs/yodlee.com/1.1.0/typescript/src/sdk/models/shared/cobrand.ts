import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Cobrand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cobrandLogin" })
  cobrandLogin: string;

  @SpeakeasyMetadata({ data: "json, name=cobrandPassword" })
  cobrandPassword: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;
}
