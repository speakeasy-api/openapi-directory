package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvoiceProcessingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceDate")
    public LocalDate invoiceDate;
    public InvoiceProcessingOptions withInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    @JsonProperty("InvoiceTargetDate")
    public LocalDate invoiceTargetDate;
    public InvoiceProcessingOptions withInvoiceTargetDate(LocalDate invoiceTargetDate) {
        this.invoiceTargetDate = invoiceTargetDate;
        return this;
    }
}