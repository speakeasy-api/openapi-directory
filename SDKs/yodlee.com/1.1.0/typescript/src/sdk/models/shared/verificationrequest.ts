import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationInput } from "./verification";



export class VerificationRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=verification" })
  verification: VerificationInput;
}
