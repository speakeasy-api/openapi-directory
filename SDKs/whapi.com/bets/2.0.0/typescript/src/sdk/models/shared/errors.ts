import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";



export class Errors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorT })
  errors?: ErrorT[];
}
