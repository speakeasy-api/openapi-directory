package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountBillingInvoice200ApplicationJsonInvoiceItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charge_name")
    public String chargeName;
    public GetAccountBillingInvoice200ApplicationJsonInvoiceItems withChargeName(String chargeName) {
        this.chargeName = chargeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charge_number")
    public String chargeNumber;
    public GetAccountBillingInvoice200ApplicationJsonInvoiceItems withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charge_type")
    public String chargeType;
    public GetAccountBillingInvoice200ApplicationJsonInvoiceItems withChargeType(String chargeType) {
        this.chargeType = chargeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public LocalDate endDate;
    public GetAccountBillingInvoice200ApplicationJsonInvoiceItems withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public GetAccountBillingInvoice200ApplicationJsonInvoiceItems withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_date")
    public LocalDate startDate;
    public GetAccountBillingInvoice200ApplicationJsonInvoiceItems withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_amount")
    public Double taxAmount;
    public GetAccountBillingInvoice200ApplicationJsonInvoiceItems withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_amount")
    public Double totalAmount;
    public GetAccountBillingInvoice200ApplicationJsonInvoiceItems withTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
}