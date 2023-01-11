import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEntityConnectionsAcceptPathParams extends SpeakeasyBase {
    connectionId: string;
}
export declare class PutEntityConnectionsAcceptHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutEntityConnectionsAcceptRequest extends SpeakeasyBase {
    pathParams: PutEntityConnectionsAcceptPathParams;
    headers: PutEntityConnectionsAcceptHeaders;
}
export declare class PutEntityConnectionsAcceptResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putEntityConnectionsAcceptResponseType?: shared.PutEntityConnectionsAcceptResponseType;
    statusCode: number;
}
