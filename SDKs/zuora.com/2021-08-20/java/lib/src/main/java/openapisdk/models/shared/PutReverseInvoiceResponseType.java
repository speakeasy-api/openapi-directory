package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutReverseInvoiceResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemo")
    public PutReverseInvoiceResponseTypeCreditMemo creditMemo;
    public PutReverseInvoiceResponseType withCreditMemo(PutReverseInvoiceResponseTypeCreditMemo creditMemo) {
        this.creditMemo = creditMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PutReverseInvoiceResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}