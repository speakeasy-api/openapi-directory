import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataQueryJobCancelled } from "./dataqueryjobcancelled";



export class DeleteDataQueryJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: DataQueryJobCancelled;
}
