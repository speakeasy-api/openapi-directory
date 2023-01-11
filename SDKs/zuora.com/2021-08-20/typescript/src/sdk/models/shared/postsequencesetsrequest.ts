import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostSequenceSetRequest } from "./postsequencesetrequest";



export class PostSequenceSetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sequenceSets", elemType: PostSequenceSetRequest })
  sequenceSets?: PostSequenceSetRequest[];
}
