import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAGroupMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberId" })
  memberId: string;
}

export enum UpdateAGroupMemberApplicationJsonActionEnum {
    Move = "move",
    SetPrimary = "set_primary"
}


export class UpdateAGroupMemberApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UpdateAGroupMemberApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=target_group_id" })
  targetGroupId?: string;
}

export enum UpdateAGroupMemberMultipartFormDataActionEnum {
    Move = "move",
    SetPrimary = "set_primary"
}


export class UpdateAGroupMemberMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action: UpdateAGroupMemberMultipartFormDataActionEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=target_group_id" })
  targetGroupId?: string;
}


export class UpdateAGroupMemberRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateAGroupMemberApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateAGroupMemberMultipartFormData;
}


export class UpdateAGroupMemberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateAGroupMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAGroupMemberPathParams;

  @SpeakeasyMetadata()
  request?: UpdateAGroupMemberRequests;

  @SpeakeasyMetadata()
  security: UpdateAGroupMemberSecurity;
}


export class UpdateAGroupMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateAGroupMember204ApplicationJSONAny?: any;
}
