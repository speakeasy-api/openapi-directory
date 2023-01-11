package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountSummaryInvoiceType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public GetAccountSummaryInvoiceType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public String balance;
    public GetAccountSummaryInvoiceType withBalance(String balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueDate")
    public LocalDate dueDate;
    public GetAccountSummaryInvoiceType withDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetAccountSummaryInvoiceType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceDate")
    public LocalDate invoiceDate;
    public GetAccountSummaryInvoiceType withInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceNumber")
    public String invoiceNumber;
    public GetAccountSummaryInvoiceType withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetAccountSummaryInvoiceType withStatus(String status) {
        this.status = status;
        return this;
    }
}