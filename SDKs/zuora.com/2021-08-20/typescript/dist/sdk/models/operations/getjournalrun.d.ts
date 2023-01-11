import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJournalRunPathParams extends SpeakeasyBase {
    jrNumber: string;
}
export declare class GetJournalRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetJournalRunRequest extends SpeakeasyBase {
    pathParams: GetJournalRunPathParams;
    headers: GetJournalRunHeaders;
}
export declare class GetJournalRunResponse extends SpeakeasyBase {
    contentType: string;
    getJournalRunType?: shared.GetJournalRunType;
    headers: Record<string, string[]>;
    statusCode: number;
}
