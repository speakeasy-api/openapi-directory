import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserPaCsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber extends SpeakeasyBase {
    country?: string;
    number?: string;
}
export declare class UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers extends SpeakeasyBase {
    country?: string;
    number?: string;
}
export declare class UserPaCs200ApplicationJsonPacAccounts extends SpeakeasyBase {
    conferenceId?: number;
    dedicatedDialInNumber?: UserPaCs200ApplicationJsonPacAccountsDedicatedDialInNumber[];
    globalDialInNumbers?: UserPaCs200ApplicationJsonPacAccountsGlobalDialInNumbers[];
    listenOnlyPassword?: string;
    participantPassword?: string;
}
export declare class UserPaCs200ApplicationJson extends SpeakeasyBase {
    pacAccounts?: UserPaCs200ApplicationJsonPacAccounts[];
}
export declare class UserPaCsRequest extends SpeakeasyBase {
    pathParams: UserPaCsPathParams;
}
export declare class UserPaCsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userPACs200ApplicationJSONObject?: UserPaCs200ApplicationJson;
}
