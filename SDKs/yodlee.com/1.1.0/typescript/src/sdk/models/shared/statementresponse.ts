import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Statement } from "./statement";



export class StatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statement", elemType: Statement })
  statement?: Statement[];
}
