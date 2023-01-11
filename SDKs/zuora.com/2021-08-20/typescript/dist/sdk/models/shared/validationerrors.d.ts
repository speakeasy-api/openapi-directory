import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationReasons } from "./validationreasons";
export declare class ValidationErrors extends SpeakeasyBase {
    reasons?: ValidationReasons[];
    success?: boolean;
}
