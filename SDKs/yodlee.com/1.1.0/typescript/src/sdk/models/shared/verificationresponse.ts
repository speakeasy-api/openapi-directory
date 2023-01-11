import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";



export class VerificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=verification", elemType: Verification })
  verification?: Verification[];
}
