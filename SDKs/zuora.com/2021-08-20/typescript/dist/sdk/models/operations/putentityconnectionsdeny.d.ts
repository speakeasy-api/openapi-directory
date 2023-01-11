import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEntityConnectionsDenyPathParams extends SpeakeasyBase {
    connectionId: string;
}
export declare class PutEntityConnectionsDenyHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutEntityConnectionsDenyRequest extends SpeakeasyBase {
    pathParams: PutEntityConnectionsDenyPathParams;
    headers: PutEntityConnectionsDenyHeaders;
}
export declare class PutEntityConnectionsDenyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putEntityConnectionsDenyResponseType?: shared.PutEntityConnectionsDenyResponseType;
    statusCode: number;
}
