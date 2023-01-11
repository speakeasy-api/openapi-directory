import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CobrandLoginRequest extends SpeakeasyBase {
    request: shared.CobrandLoginRequest;
}
export declare class CobrandLoginResponse extends SpeakeasyBase {
    cobrandLoginResponse?: shared.CobrandLoginResponse;
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
