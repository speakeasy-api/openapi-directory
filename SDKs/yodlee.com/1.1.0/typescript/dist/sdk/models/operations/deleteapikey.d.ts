import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteApiKeyPathParams extends SpeakeasyBase {
    key: string;
}
export declare class DeleteApiKeyRequest extends SpeakeasyBase {
    pathParams: DeleteApiKeyPathParams;
}
export declare class DeleteApiKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
