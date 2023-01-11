import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMassUpdateType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType?: string;

  @SpeakeasyMetadata({ data: "json, name=endedOn" })
  endedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=errorCount" })
  errorCount?: string;

  @SpeakeasyMetadata({ data: "json, name=inputSize" })
  inputSize?: number;

  @SpeakeasyMetadata({ data: "json, name=outputSize" })
  outputSize?: number;

  @SpeakeasyMetadata({ data: "json, name=outputType" })
  outputType?: string;

  @SpeakeasyMetadata({ data: "json, name=outputURL" })
  outputURL?: string;

  @SpeakeasyMetadata({ data: "json, name=processedCount" })
  processedCount?: string;

  @SpeakeasyMetadata({ data: "json, name=startedOn" })
  startedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=successCount" })
  successCount?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadedBy" })
  uploadedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadedOn" })
  uploadedOn?: Date;
}
