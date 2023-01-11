import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationStatus } from "./verificationstatus";



export class VerificationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=verification", elemType: VerificationStatus })
  verification?: VerificationStatus[];
}
