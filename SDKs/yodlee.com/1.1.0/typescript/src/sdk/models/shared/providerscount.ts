import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TotalCount } from "./totalcount";



export class ProvidersCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TOTAL" })
  total?: TotalCount;
}
