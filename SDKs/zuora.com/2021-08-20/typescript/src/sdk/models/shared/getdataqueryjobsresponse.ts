import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataQueryJob } from "./dataqueryjob";



export class GetDataQueryJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: DataQueryJob })
  data?: DataQueryJob[];
}
