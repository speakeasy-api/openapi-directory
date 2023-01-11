package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostInvoiceCollectInvoicesType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceAmount")
    public String invoiceAmount;
    public PostInvoiceCollectInvoicesType withInvoiceAmount(String invoiceAmount) {
        this.invoiceAmount = invoiceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public PostInvoiceCollectInvoicesType withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceNumber")
    public String invoiceNumber;
    public PostInvoiceCollectInvoicesType withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
}