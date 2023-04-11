import { SpeakeasyBase } from "../../../internal/utils";
import { Error401 } from "./error401";
/**
 * Unauthorized
 */
export declare class ErrorResponse401Record extends SpeakeasyBase {
    code?: number;
    details?: Error401[];
    message?: string;
}
