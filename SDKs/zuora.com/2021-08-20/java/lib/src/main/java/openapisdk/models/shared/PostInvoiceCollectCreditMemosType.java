package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostInvoiceCollectCreditMemosType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostInvoiceCollectCreditMemosType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoAmount")
    public String memoAmount;
    public PostInvoiceCollectCreditMemosType withMemoAmount(String memoAmount) {
        this.memoAmount = memoAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoNumber")
    public String memoNumber;
    public PostInvoiceCollectCreditMemosType withMemoNumber(String memoNumber) {
        this.memoNumber = memoNumber;
        return this;
    }
}