import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetSequenceSetResponse } from "./getsequencesetresponse";



export class GetSequenceSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sequenceSets", elemType: GetSequenceSetResponse })
  sequenceSets?: GetSequenceSetResponse[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
