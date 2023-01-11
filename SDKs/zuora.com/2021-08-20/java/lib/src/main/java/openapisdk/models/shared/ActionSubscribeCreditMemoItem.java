package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionSubscribeCreditMemoItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AmountWithoutTax")
    public Double amountWithoutTax;
    public ActionSubscribeCreditMemoItem withAmountWithoutTax(Double amountWithoutTax) {
        this.amountWithoutTax = amountWithoutTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeName")
    public String chargeName;
    public ActionSubscribeCreditMemoItem withChargeName(String chargeName) {
        this.chargeName = chargeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ActionSubscribeCreditMemoItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductRatePlanChargeId")
    public String productRatePlanChargeId;
    public ActionSubscribeCreditMemoItem withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quantity")
    public Long quantity;
    public ActionSubscribeCreditMemoItem withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceEndDate")
    public LocalDate serviceEndDate;
    public ActionSubscribeCreditMemoItem withServiceEndDate(LocalDate serviceEndDate) {
        this.serviceEndDate = serviceEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceStartDate")
    public LocalDate serviceStartDate;
    public ActionSubscribeCreditMemoItem withServiceStartDate(LocalDate serviceStartDate) {
        this.serviceStartDate = serviceStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxAmount")
    public Double taxAmount;
    public ActionSubscribeCreditMemoItem withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnitOfMeasure")
    public String unitOfMeasure;
    public ActionSubscribeCreditMemoItem withUnitOfMeasure(String unitOfMeasure) {
        this.unitOfMeasure = unitOfMeasure;
        return this;
    }
}