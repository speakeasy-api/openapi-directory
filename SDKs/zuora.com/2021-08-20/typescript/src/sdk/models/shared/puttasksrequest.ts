import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateTask } from "./updatetask";



export class PutTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: UpdateTask })
  data?: UpdateTask[];
}
