import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";



export class Itinerary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseFareUSD" })
  baseFareUSD?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=segments", elemType: Segment })
  segments: Segment[];

  @SpeakeasyMetadata({ data: "json, name=ticketingCarrier" })
  ticketingCarrier?: string;
}
