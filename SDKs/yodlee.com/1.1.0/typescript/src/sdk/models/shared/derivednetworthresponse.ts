import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DerivedNetworth } from "./derivednetworth";



export class DerivedNetworthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networth", elemType: DerivedNetworth })
  networth?: DerivedNetworth[];
}
