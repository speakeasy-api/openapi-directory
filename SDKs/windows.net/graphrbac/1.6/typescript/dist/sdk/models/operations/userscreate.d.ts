import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersCreatePathParams extends SpeakeasyBase {
    tenantID: string;
}
export declare class UsersCreateQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class UsersCreateRequests extends SpeakeasyBase {
    userCreateParameters?: Record<string, Record<string, any>>;
    userCreateParameters1?: Record<string, Record<string, any>>;
}
export declare class UsersCreateRequest extends SpeakeasyBase {
    pathParams: UsersCreatePathParams;
    queryParams: UsersCreateQueryParams;
    request: UsersCreateRequests;
}
export declare class UsersCreateResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
    user?: Record<string, Record<string, any>>;
}
