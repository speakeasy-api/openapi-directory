import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetEntitiesType } from "./getentitiestype";



export class GetEntitiesResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GetEntitiesType })
  entities?: GetEntitiesType[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
