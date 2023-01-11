import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSequenceSetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSequenceSetHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteSequenceSetRequest extends SpeakeasyBase {
    pathParams: DeleteSequenceSetPathParams;
    headers: DeleteSequenceSetHeaders;
}
export declare class DeleteSequenceSetResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
