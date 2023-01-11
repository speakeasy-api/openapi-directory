import { SpeakeasyBase } from "../../../internal/utils";
export declare class MeetingregistrantdeletePathParams extends SpeakeasyBase {
    meetingId: number;
    registrantId: string;
}
export declare class MeetingregistrantdeleteQueryParams extends SpeakeasyBase {
    occurrenceId?: string;
}
export declare class MeetingregistrantdeleteRequest extends SpeakeasyBase {
    pathParams: MeetingregistrantdeletePathParams;
    queryParams: MeetingregistrantdeleteQueryParams;
}
export declare class MeetingregistrantdeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
