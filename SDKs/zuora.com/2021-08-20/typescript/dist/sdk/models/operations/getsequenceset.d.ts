import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSequenceSetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSequenceSetHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetSequenceSetRequest extends SpeakeasyBase {
    pathParams: GetSequenceSetPathParams;
    headers: GetSequenceSetHeaders;
}
export declare class GetSequenceSetResponse extends SpeakeasyBase {
    contentType: string;
    getSequenceSetResponse?: shared.GetSequenceSetResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
