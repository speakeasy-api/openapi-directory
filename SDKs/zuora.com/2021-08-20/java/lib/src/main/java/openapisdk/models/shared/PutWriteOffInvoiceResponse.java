package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutWriteOffInvoiceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemo")
    public PutWriteOffInvoiceResponseCreditMemo creditMemo;
    public PutWriteOffInvoiceResponse withCreditMemo(PutWriteOffInvoiceResponseCreditMemo creditMemo) {
        this.creditMemo = creditMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PutWriteOffInvoiceResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}