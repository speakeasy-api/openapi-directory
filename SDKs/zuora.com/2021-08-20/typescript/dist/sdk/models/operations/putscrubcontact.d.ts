import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutScrubContactPathParams extends SpeakeasyBase {
    contactId: string;
}
export declare class PutScrubContactHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutScrubContactRequest extends SpeakeasyBase {
    pathParams: PutScrubContactPathParams;
    headers: PutScrubContactHeaders;
}
export declare class PutScrubContactResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
