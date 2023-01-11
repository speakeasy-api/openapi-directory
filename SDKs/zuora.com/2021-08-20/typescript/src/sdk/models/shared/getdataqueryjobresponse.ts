import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataQueryJob } from "./dataqueryjob";



export class GetDataQueryJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: DataQueryJob;
}
