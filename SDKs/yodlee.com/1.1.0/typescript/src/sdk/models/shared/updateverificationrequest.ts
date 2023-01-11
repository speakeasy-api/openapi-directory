import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateVerificationInput } from "./updateverification";



export class UpdateVerificationRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=verification" })
  verification?: UpdateVerificationInput;
}
