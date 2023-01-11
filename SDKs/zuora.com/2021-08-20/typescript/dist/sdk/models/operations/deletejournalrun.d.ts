import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteJournalRunPathParams extends SpeakeasyBase {
    jrNumber: string;
}
export declare class DeleteJournalRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class DeleteJournalRunRequest extends SpeakeasyBase {
    pathParams: DeleteJournalRunPathParams;
    headers: DeleteJournalRunHeaders;
}
export declare class DeleteJournalRunResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
