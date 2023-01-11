package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountBillingInvoice200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Double balance;
    public GetAccountBillingInvoice200ApplicationJson withBalance(Double balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public GetAccountBillingInvoice200ApplicationJson withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_date")
    public String dueDate;
    public GetAccountBillingInvoice200ApplicationJson withDueDate(String dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetAccountBillingInvoice200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_date")
    public String invoiceDate;
    public GetAccountBillingInvoice200ApplicationJson withInvoiceDate(String invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_items")
    public GetAccountBillingInvoice200ApplicationJsonInvoiceItems[] invoiceItems;
    public GetAccountBillingInvoice200ApplicationJson withInvoiceItems(GetAccountBillingInvoice200ApplicationJsonInvoiceItems[] invoiceItems) {
        this.invoiceItems = invoiceItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_number")
    public String invoiceNumber;
    public GetAccountBillingInvoice200ApplicationJson withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetAccountBillingInvoice200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_date")
    public String targetDate;
    public GetAccountBillingInvoice200ApplicationJson withTargetDate(String targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_amount")
    public Double taxAmount;
    public GetAccountBillingInvoice200ApplicationJson withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_amount")
    public Double totalAmount;
    public GetAccountBillingInvoice200ApplicationJson withTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
}