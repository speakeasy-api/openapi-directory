import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSequenceSetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSequenceSetHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutSequenceSetRequest extends SpeakeasyBase {
    pathParams: PutSequenceSetPathParams;
    headers: PutSequenceSetHeaders;
    request?: shared.PutSequenceSetRequest;
}
export declare class PutSequenceSetResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putSequenceSetResponse?: shared.PutSequenceSetResponse;
    statusCode: number;
}
