import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJobStatusAndResponsePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class GetJobStatusAndResponseHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}

export enum GetJobStatusAndResponse200ApplicationJsonStatusEnum {
    Processing = "Processing",
    Failed = "Failed",
    Completed = "Completed"
}


export class GetJobStatusAndResponse200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.JobResult;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetJobStatusAndResponse200ApplicationJsonStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class GetJobStatusAndResponseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJobStatusAndResponsePathParams;

  @SpeakeasyMetadata()
  headers: GetJobStatusAndResponseHeaders;
}


export class GetJobStatusAndResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getJobStatusAndResponse200ApplicationJSONObject?: GetJobStatusAndResponse200ApplicationJson;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
