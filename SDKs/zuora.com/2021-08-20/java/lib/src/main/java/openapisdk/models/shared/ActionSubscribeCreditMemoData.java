package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionSubscribeCreditMemoData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditMemo")
    public ActionSubscribeCreditMemo creditMemo;
    public ActionSubscribeCreditMemoData withCreditMemo(ActionSubscribeCreditMemo creditMemo) {
        this.creditMemo = creditMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditMemoItem")
    public ActionSubscribeCreditMemoItem[] creditMemoItem;
    public ActionSubscribeCreditMemoData withCreditMemoItem(ActionSubscribeCreditMemoItem[] creditMemoItem) {
        this.creditMemoItem = creditMemoItem;
        return this;
    }
}