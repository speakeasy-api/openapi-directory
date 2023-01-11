import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutJournalRunPathParams extends SpeakeasyBase {
    jrNumber: string;
}
export declare class PutJournalRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutJournalRunRequest extends SpeakeasyBase {
    pathParams: PutJournalRunPathParams;
    headers: PutJournalRunHeaders;
}
export declare class PutJournalRunResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
