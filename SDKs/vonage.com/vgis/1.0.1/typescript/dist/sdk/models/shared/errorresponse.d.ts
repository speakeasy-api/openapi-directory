import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
export declare class ErrorResponse extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    errors?: ErrorT[];
}
