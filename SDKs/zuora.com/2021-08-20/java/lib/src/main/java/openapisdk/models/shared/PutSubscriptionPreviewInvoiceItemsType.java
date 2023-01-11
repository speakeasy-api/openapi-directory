package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSubscriptionPreviewInvoiceItemsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeAmount")
    public Double chargeAmount;
    public PutSubscriptionPreviewInvoiceItemsType withChargeAmount(Double chargeAmount) {
        this.chargeAmount = chargeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeDescription")
    public String chargeDescription;
    public PutSubscriptionPreviewInvoiceItemsType withChargeDescription(String chargeDescription) {
        this.chargeDescription = chargeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeName")
    public String chargeName;
    public PutSubscriptionPreviewInvoiceItemsType withChargeName(String chargeName) {
        this.chargeName = chargeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productName")
    public String productName;
    public PutSubscriptionPreviewInvoiceItemsType withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public PutSubscriptionPreviewInvoiceItemsType withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public PutSubscriptionPreviewInvoiceItemsType withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceEndDate")
    public LocalDate serviceEndDate;
    public PutSubscriptionPreviewInvoiceItemsType withServiceEndDate(LocalDate serviceEndDate) {
        this.serviceEndDate = serviceEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceStartDate")
    public LocalDate serviceStartDate;
    public PutSubscriptionPreviewInvoiceItemsType withServiceStartDate(LocalDate serviceStartDate) {
        this.serviceStartDate = serviceStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitOfMeasure")
    public String unitOfMeasure;
    public PutSubscriptionPreviewInvoiceItemsType withUnitOfMeasure(String unitOfMeasure) {
        this.unitOfMeasure = unitOfMeasure;
        return this;
    }
}