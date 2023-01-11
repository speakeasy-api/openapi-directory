package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountBillingInvoices200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public AccountBillingInvoices200ApplicationJson withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public AccountBillingInvoices200ApplicationJsonInvoices[] invoices;
    public AccountBillingInvoices200ApplicationJson withInvoices(AccountBillingInvoices200ApplicationJsonInvoices[] invoices) {
        this.invoices = invoices;
        return this;
    }
}