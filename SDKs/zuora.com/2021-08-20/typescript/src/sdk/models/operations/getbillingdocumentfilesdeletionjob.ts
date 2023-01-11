import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBillingDocumentFilesDeletionJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class GetBillingDocumentFilesDeletionJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetBillingDocumentFilesDeletionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBillingDocumentFilesDeletionJobPathParams;

  @SpeakeasyMetadata()
  headers: GetBillingDocumentFilesDeletionJobHeaders;
}


export class GetBillingDocumentFilesDeletionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getBillingDocumentFilesDeletionJobResponse?: shared.GetBillingDocumentFilesDeletionJobResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
