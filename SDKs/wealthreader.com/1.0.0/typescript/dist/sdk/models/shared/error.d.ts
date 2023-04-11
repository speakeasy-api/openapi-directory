import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
import { Statistics } from "./statistics";
export declare class ErrorT extends SpeakeasyBase {
    error: ErrorDetail;
    statistics: Statistics;
    success: boolean;
}
