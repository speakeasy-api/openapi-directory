import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cobrand } from "./cobrand";



export class CobrandLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cobrand" })
  cobrand: Cobrand;
}
