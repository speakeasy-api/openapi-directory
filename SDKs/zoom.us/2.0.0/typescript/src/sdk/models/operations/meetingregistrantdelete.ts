import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MeetingregistrantdeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrantId" })
  registrantId: string;
}


export class MeetingregistrantdeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurrence_id" })
  occurrenceId?: string;
}


export class MeetingregistrantdeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingregistrantdeletePathParams;

  @SpeakeasyMetadata()
  queryParams: MeetingregistrantdeleteQueryParams;
}


export class MeetingregistrantdeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
