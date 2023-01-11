package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSubscriptionPreviewCreditMemoItemsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountWithoutTax")
    public Double amountWithoutTax;
    public PostSubscriptionPreviewCreditMemoItemsType withAmountWithoutTax(Double amountWithoutTax) {
        this.amountWithoutTax = amountWithoutTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeAmount")
    public Double chargeAmount;
    public PostSubscriptionPreviewCreditMemoItemsType withChargeAmount(Double chargeAmount) {
        this.chargeAmount = chargeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeDescription")
    public String chargeDescription;
    public PostSubscriptionPreviewCreditMemoItemsType withChargeDescription(String chargeDescription) {
        this.chargeDescription = chargeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeName")
    public String chargeName;
    public PostSubscriptionPreviewCreditMemoItemsType withChargeName(String chargeName) {
        this.chargeName = chargeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productName")
    public String productName;
    public PostSubscriptionPreviewCreditMemoItemsType withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public PostSubscriptionPreviewCreditMemoItemsType withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public PostSubscriptionPreviewCreditMemoItemsType withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceEndDate")
    public LocalDate serviceEndDate;
    public PostSubscriptionPreviewCreditMemoItemsType withServiceEndDate(LocalDate serviceEndDate) {
        this.serviceEndDate = serviceEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceStartDate")
    public LocalDate serviceStartDate;
    public PostSubscriptionPreviewCreditMemoItemsType withServiceStartDate(LocalDate serviceStartDate) {
        this.serviceStartDate = serviceStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Double taxAmount;
    public PostSubscriptionPreviewCreditMemoItemsType withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitOfMeasure")
    public String unitOfMeasure;
    public PostSubscriptionPreviewCreditMemoItemsType withUnitOfMeasure(String unitOfMeasure) {
        this.unitOfMeasure = unitOfMeasure;
        return this;
    }
}