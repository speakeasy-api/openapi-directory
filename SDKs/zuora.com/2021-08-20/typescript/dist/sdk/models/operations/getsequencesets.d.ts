import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSequenceSetsQueryParams extends SpeakeasyBase {
    name?: string;
    page?: number;
    pageSize?: number;
}
export declare class GetSequenceSetsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetSequenceSetsRequest extends SpeakeasyBase {
    queryParams: GetSequenceSetsQueryParams;
    headers: GetSequenceSetsHeaders;
}
export declare class GetSequenceSetsResponse extends SpeakeasyBase {
    contentType: string;
    getSequenceSetsResponse?: shared.GetSequenceSetsResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
