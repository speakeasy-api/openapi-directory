import { SpeakeasyBase } from "../../../internal/utils";
import { Solution } from "./solution";
export declare class ErrorT extends SpeakeasyBase {
    code?: string;
    field?: string;
    message?: string;
    solution?: Solution;
}
