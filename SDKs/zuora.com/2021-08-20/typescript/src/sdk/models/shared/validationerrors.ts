import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationReasons } from "./validationreasons";



export class ValidationErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: ValidationReasons })
  reasons?: ValidationReasons[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
