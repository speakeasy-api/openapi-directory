package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountBillingInvoices200ApplicationJsonInvoices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Double balance;
    public AccountBillingInvoices200ApplicationJsonInvoices withBalance(Double balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_date")
    public String dueDate;
    public AccountBillingInvoices200ApplicationJsonInvoices withDueDate(String dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountBillingInvoices200ApplicationJsonInvoices withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_date")
    public String invoiceDate;
    public AccountBillingInvoices200ApplicationJsonInvoices withInvoiceDate(String invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_number")
    public String invoiceNumber;
    public AccountBillingInvoices200ApplicationJsonInvoices withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public AccountBillingInvoices200ApplicationJsonInvoices withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_date")
    public String targetDate;
    public AccountBillingInvoices200ApplicationJsonInvoices withTargetDate(String targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_amount")
    public Double taxAmount;
    public AccountBillingInvoices200ApplicationJsonInvoices withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_amount")
    public Double totalAmount;
    public AccountBillingInvoices200ApplicationJsonInvoices withTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
}