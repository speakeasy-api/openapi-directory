package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInvoiceTaxItemType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableToCreditAmount")
    public Double availableToCreditAmount;
    public GetInvoiceTaxItemType withAvailableToCreditAmount(Double availableToCreditAmount) {
        this.availableToCreditAmount = availableToCreditAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Double balance;
    public GetInvoiceTaxItemType withBalance(Double balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditAmount")
    public Double creditAmount;
    public GetInvoiceTaxItemType withCreditAmount(Double creditAmount) {
        this.creditAmount = creditAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptAmount")
    public Double exemptAmount;
    public GetInvoiceTaxItemType withExemptAmount(Double exemptAmount) {
        this.exemptAmount = exemptAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetInvoiceTaxItemType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jurisdiction")
    public String jurisdiction;
    public GetInvoiceTaxItemType withJurisdiction(String jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationCode")
    public String locationCode;
    public GetInvoiceTaxItemType withLocationCode(String locationCode) {
        this.locationCode = locationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetInvoiceTaxItemType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentAmount")
    public Double paymentAmount;
    public GetInvoiceTaxItemType withPaymentAmount(Double paymentAmount) {
        this.paymentAmount = paymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Double taxAmount;
    public GetInvoiceTaxItemType withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCode")
    public String taxCode;
    public GetInvoiceTaxItemType withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCodeDescription")
    public String taxCodeDescription;
    public GetInvoiceTaxItemType withTaxCodeDescription(String taxCodeDescription) {
        this.taxCodeDescription = taxCodeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxDate")
    public LocalDate taxDate;
    public GetInvoiceTaxItemType withTaxDate(LocalDate taxDate) {
        this.taxDate = taxDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxRate")
    public Double taxRate;
    public GetInvoiceTaxItemType withTaxRate(Double taxRate) {
        this.taxRate = taxRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxRateDescription")
    public String taxRateDescription;
    public GetInvoiceTaxItemType withTaxRateDescription(String taxRateDescription) {
        this.taxRateDescription = taxRateDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxRateType")
    public GetInvoiceTaxItemTypeTaxRateTypeEnum taxRateType;
    public GetInvoiceTaxItemType withTaxRateType(GetInvoiceTaxItemTypeTaxRateTypeEnum taxRateType) {
        this.taxRateType = taxRateType;
        return this;
    }
}