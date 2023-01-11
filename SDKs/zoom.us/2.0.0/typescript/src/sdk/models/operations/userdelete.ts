import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum UserDeleteActionEnum {
    Disassociate = "disassociate",
    Delete = "delete"
}


export class UserDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: UserDeleteActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transfer_email" })
  transferEmail?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transfer_meeting" })
  transferMeeting?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transfer_recording" })
  transferRecording?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transfer_webinar" })
  transferWebinar?: boolean;
}


export class UserDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: UserDeleteQueryParams;
}


export class UserDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
