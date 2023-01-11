import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersUpdatePathParams extends SpeakeasyBase {
    tenantID: string;
    upnOrObjectId: string;
}
export declare class UsersUpdateQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class UsersUpdateRequests extends SpeakeasyBase {
    userUpdateParameters?: Record<string, Record<string, any>>;
    userUpdateParameters1?: Record<string, Record<string, any>>;
}
export declare class UsersUpdateRequest extends SpeakeasyBase {
    pathParams: UsersUpdatePathParams;
    queryParams: UsersUpdateQueryParams;
    request: UsersUpdateRequests;
}
export declare class UsersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
