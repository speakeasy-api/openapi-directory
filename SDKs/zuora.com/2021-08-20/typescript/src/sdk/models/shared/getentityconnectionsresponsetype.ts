import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetEntityConnectionsArrayItemsType } from "./getentityconnectionsarrayitemstype";



export class GetEntityConnectionsResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityConnections", elemType: GetEntityConnectionsArrayItemsType })
  entityConnections?: GetEntityConnectionsArrayItemsType[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
