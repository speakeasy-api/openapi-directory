import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EvaluateAddressRequest extends SpeakeasyBase {
    request: shared.EvaluateAddressRequest;
}
export declare class EvaluateAddressResponse extends SpeakeasyBase {
    contentType: string;
    evaluateAddressResponse?: shared.EvaluateAddressResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
