package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvoiceItemPreviewResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalInfo")
    public InvoiceItemPreviewResultAdditionalInfo additionalInfo;
    public InvoiceItemPreviewResult withAdditionalInfo(InvoiceItemPreviewResultAdditionalInfo additionalInfo) {
        this.additionalInfo = additionalInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountWithoutTax")
    public Double amountWithoutTax;
    public InvoiceItemPreviewResult withAmountWithoutTax(Double amountWithoutTax) {
        this.amountWithoutTax = amountWithoutTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedToChargeNumber")
    public String appliedToChargeNumber;
    public InvoiceItemPreviewResult withAppliedToChargeNumber(String appliedToChargeNumber) {
        this.appliedToChargeNumber = appliedToChargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeDescription")
    public String chargeDescription;
    public InvoiceItemPreviewResult withChargeDescription(String chargeDescription) {
        this.chargeDescription = chargeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeName")
    public String chargeName;
    public InvoiceItemPreviewResult withChargeName(String chargeName) {
        this.chargeName = chargeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public InvoiceItemPreviewResult withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingType")
    public InvoiceItemPreviewResultProcessingTypeEnum processingType;
    public InvoiceItemPreviewResult withProcessingType(InvoiceItemPreviewResultProcessingTypeEnum processingType) {
        this.processingType = processingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productName")
    public String productName;
    public InvoiceItemPreviewResult withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public InvoiceItemPreviewResult withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceEndDate")
    public LocalDate serviceEndDate;
    public InvoiceItemPreviewResult withServiceEndDate(LocalDate serviceEndDate) {
        this.serviceEndDate = serviceEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceStartDate")
    public LocalDate serviceStartDate;
    public InvoiceItemPreviewResult withServiceStartDate(LocalDate serviceStartDate) {
        this.serviceStartDate = serviceStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public InvoiceItemPreviewResult withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Double taxAmount;
    public InvoiceItemPreviewResult withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
}