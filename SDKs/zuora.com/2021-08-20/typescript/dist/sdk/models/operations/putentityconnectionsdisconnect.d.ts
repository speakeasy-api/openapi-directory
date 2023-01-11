import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEntityConnectionsDisconnectPathParams extends SpeakeasyBase {
    connectionId: string;
}
export declare class PutEntityConnectionsDisconnectHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutEntityConnectionsDisconnectRequest extends SpeakeasyBase {
    pathParams: PutEntityConnectionsDisconnectPathParams;
    headers: PutEntityConnectionsDisconnectHeaders;
}
export declare class PutEntityConnectionsDisconnectResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putEntityConnectionsDisconnectResponseType?: shared.PutEntityConnectionsDisconnectResponseType;
    statusCode: number;
}
