package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyModifyBillRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceDate")
    public LocalDate invoiceDate;
    public ProxyModifyBillRun withInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    @JsonProperty("Status")
    public String status;
    public ProxyModifyBillRun withStatus(String status) {
        this.status = status;
        return this;
    }
}