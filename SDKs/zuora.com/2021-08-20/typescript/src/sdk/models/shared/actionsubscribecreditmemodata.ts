import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionSubscribeCreditMemo } from "./actionsubscribecreditmemo";
import { ActionSubscribeCreditMemoItem } from "./actionsubscribecreditmemoitem";



export class ActionSubscribeCreditMemoData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditMemo" })
  creditMemo?: ActionSubscribeCreditMemo;

  @SpeakeasyMetadata({ data: "json, name=CreditMemoItem", elemType: ActionSubscribeCreditMemoItem })
  creditMemoItem?: ActionSubscribeCreditMemoItem[];
}
