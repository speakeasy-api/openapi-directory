import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";



export class Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field", elemType: Field })
  field?: Field[];

  @SpeakeasyMetadata({ data: "json, name=fieldRowChoice" })
  fieldRowChoice?: string;

  @SpeakeasyMetadata({ data: "json, name=form" })
  form?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}
