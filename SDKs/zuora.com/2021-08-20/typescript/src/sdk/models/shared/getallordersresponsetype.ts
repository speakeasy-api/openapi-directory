import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";



export class GetAllOrdersResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=orders", elemType: Order })
  orders?: Order[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
