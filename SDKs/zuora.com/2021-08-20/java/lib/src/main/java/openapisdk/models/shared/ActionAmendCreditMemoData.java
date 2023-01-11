package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionAmendCreditMemoData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditMemo")
    public ActionAmendCreditMemo creditMemo;
    public ActionAmendCreditMemoData withCreditMemo(ActionAmendCreditMemo creditMemo) {
        this.creditMemo = creditMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditMemoItem")
    public ActionAmendCreditMemoItem[] creditMemoItem;
    public ActionAmendCreditMemoData withCreditMemoItem(ActionAmendCreditMemoItem[] creditMemoItem) {
        this.creditMemoItem = creditMemoItem;
        return this;
    }
}