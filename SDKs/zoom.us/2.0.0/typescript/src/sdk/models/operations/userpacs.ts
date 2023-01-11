import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserPaCsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


export class UserPaCs200ApplicationJsonPacAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conference_id" })
  conferenceId?: number;

  @SpeakeasyMetadata({ data: "json, name=dedicated_dial_in_number", elemType: UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber })
  dedicatedDialInNumber?: UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber[];

  @SpeakeasyMetadata({ data: "json, name=global_dial_in_numbers", elemType: UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers })
  globalDialInNumbers?: UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers[];

  @SpeakeasyMetadata({ data: "json, name=listen_only_password" })
  listenOnlyPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=participant_password" })
  participantPassword?: string;
}


export class UserPaCs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pac_accounts", elemType: UserPaCs200ApplicationJsonPacAccounts })
  pacAccounts?: UserPaCs200ApplicationJsonPacAccounts[];
}


export class UserPaCsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserPaCsPathParams;
}


export class UserPaCsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userPACs200ApplicationJSONObject?: UserPaCs200ApplicationJson;
}
