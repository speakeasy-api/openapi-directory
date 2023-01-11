package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BillingPreviewResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public BillingPreviewResult withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoItems")
    public PostBillingPreviewCreditMemoItem[] creditMemoItems;
    public BillingPreviewResult withCreditMemoItems(PostBillingPreviewCreditMemoItem[] creditMemoItems) {
        this.creditMemoItems = creditMemoItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceItems")
    public PostBillingPreviewInvoiceItem[] invoiceItems;
    public BillingPreviewResult withInvoiceItems(PostBillingPreviewInvoiceItem[] invoiceItems) {
        this.invoiceItems = invoiceItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public BillingPreviewResult withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}