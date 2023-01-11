import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchDebitMemoType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
