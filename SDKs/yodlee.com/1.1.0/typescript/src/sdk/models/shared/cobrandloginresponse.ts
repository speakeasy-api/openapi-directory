import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CobrandSession } from "./cobrandsession";



export class CobrandLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=cobrandId" })
  cobrandId?: number;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: CobrandSession;
}
