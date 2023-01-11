import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CobrandSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cobSession" })
  cobSession?: string;
}
