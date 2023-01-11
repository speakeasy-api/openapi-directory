import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionAmendCreditMemo } from "./actionamendcreditmemo";
import { ActionAmendCreditMemoItem } from "./actionamendcreditmemoitem";



export class ActionAmendCreditMemoData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditMemo" })
  creditMemo?: ActionAmendCreditMemo;

  @SpeakeasyMetadata({ data: "json, name=CreditMemoItem", elemType: ActionAmendCreditMemoItem })
  creditMemoItem?: ActionAmendCreditMemoItem[];
}
