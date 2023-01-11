import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Security } from "./security";



export class SecurityHolding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=security" })
  security?: Security;
}
