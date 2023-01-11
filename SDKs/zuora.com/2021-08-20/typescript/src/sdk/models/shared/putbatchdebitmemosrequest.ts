import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchDebitMemoType } from "./batchdebitmemotype";



export class PutBatchDebitMemosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debitMemos", elemType: BatchDebitMemoType })
  debitMemos?: BatchDebitMemoType[];
}
