package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceDate")
    public LocalDate invoiceDate;
    public SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions withInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceProcessingScope")
    public String invoiceProcessingScope;
    public SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions withInvoiceProcessingScope(String invoiceProcessingScope) {
        this.invoiceProcessingScope = invoiceProcessingScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceTargetDate")
    public LocalDate invoiceTargetDate;
    public SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions withInvoiceTargetDate(LocalDate invoiceTargetDate) {
        this.invoiceTargetDate = invoiceTargetDate;
        return this;
    }
}