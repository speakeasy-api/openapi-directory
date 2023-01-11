import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetailCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
