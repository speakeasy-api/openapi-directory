import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsageValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskCount" })
  taskCount?: number;
}


// Usage
/** 
 * The task usage of a particular day.
 * 
**/
export class Usage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: UsageValues;
}
