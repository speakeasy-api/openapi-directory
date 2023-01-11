package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderDeltaMrr
 * Order Delta Mrr. This is a metric that reflects the change to the TCV on rate plan charge object as the result of the order.
 * 
**/
public class OrderDeltaMrr {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public OrderDeltaMrr withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public OrderDeltaMrr withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public OrderDeltaMrr withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossAmount")
    public Double grossAmount;
    public OrderDeltaMrr withGrossAmount(Double grossAmount) {
        this.grossAmount = grossAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netAmount")
    public Double netAmount;
    public OrderDeltaMrr withNetAmount(Double netAmount) {
        this.netAmount = netAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderActionId")
    public String orderActionId;
    public OrderDeltaMrr withOrderActionId(String orderActionId) {
        this.orderActionId = orderActionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderActionSequence")
    public String orderActionSequence;
    public OrderDeltaMrr withOrderActionSequence(String orderActionSequence) {
        this.orderActionSequence = orderActionSequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderActionType")
    public String orderActionType;
    public OrderDeltaMrr withOrderActionType(String orderActionType) {
        this.orderActionType = orderActionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public OrderDeltaMrr withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePlanChargeId")
    public String ratePlanChargeId;
    public OrderDeltaMrr withRatePlanChargeId(String ratePlanChargeId) {
        this.ratePlanChargeId = ratePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public OrderDeltaMrr withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public OrderDeltaMrr withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}