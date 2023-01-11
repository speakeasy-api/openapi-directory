import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataQueryJob } from "./dataqueryjob";



export class SubmitDataQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: DataQueryJob;
}
