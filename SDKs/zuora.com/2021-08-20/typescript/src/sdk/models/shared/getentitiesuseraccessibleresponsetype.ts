import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetEntitiesType } from "./getentitiestype";



export class GetEntitiesUserAccessibleResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GetEntitiesType })
  entities?: GetEntitiesType[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
