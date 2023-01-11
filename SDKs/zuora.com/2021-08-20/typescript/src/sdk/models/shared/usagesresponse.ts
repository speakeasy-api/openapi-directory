import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";



export class UsagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Usage })
  metrics?: Usage[];
}
