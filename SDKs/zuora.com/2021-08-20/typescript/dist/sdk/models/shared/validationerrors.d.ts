import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationReasons } from "./validationreasons";
/**
 * Bad Request for one of the following reasons:
 *
 * @remarks
 * * The name or description fields are not strings.
 * * The ondemand_trigger, callout_trigger, or scheduled_trigger fields are not booleans.
 * * The timezone does not match one of the valid values in [this spread sheet](https://docs.google.com/spreadsheets/d/1skhepi-q5l9LyaMUPZjU_V9gzTphNMqNyV6ST5mygEo/edit?usp=sharing).
 * * The priority is not one of High, Medium, or Low.
 * * The status is not one of Active or Inactive.
 * * The scheduled_trigger is set to true but a valid timezone and interval were not passed.
 *
 */
export declare class ValidationErrors extends SpeakeasyBase {
    /**
     * The list of reasons that the request was unsuccessful
     */
    reasons?: ValidationReasons[];
    /**
     * Returns `false` if the request was not successful.
     */
    success?: boolean;
}
