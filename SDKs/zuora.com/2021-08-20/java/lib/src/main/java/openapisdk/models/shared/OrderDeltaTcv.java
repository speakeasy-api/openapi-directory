package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderDeltaTcv
 * Order Delta Tcv. This is a metric that reflects the change to the TCV on Rate Plan Charge object, or the Total Contracted Value for an Order Line Item as the result of the order
 * 
**/
public class OrderDeltaTcv {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public OrderDeltaTcv withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public OrderDeltaTcv withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public OrderDeltaTcv withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossAmount")
    public Double grossAmount;
    public OrderDeltaTcv withGrossAmount(Double grossAmount) {
        this.grossAmount = grossAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netAmount")
    public Double netAmount;
    public OrderDeltaTcv withNetAmount(Double netAmount) {
        this.netAmount = netAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderActionId")
    public String orderActionId;
    public OrderDeltaTcv withOrderActionId(String orderActionId) {
        this.orderActionId = orderActionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderActionSequence")
    public String orderActionSequence;
    public OrderDeltaTcv withOrderActionSequence(String orderActionSequence) {
        this.orderActionSequence = orderActionSequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderActionType")
    public String orderActionType;
    public OrderDeltaTcv withOrderActionType(String orderActionType) {
        this.orderActionType = orderActionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderLineItemId")
    public String orderLineItemId;
    public OrderDeltaTcv withOrderLineItemId(String orderLineItemId) {
        this.orderLineItemId = orderLineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public OrderDeltaTcv withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePlanChargeId")
    public String ratePlanChargeId;
    public OrderDeltaTcv withRatePlanChargeId(String ratePlanChargeId) {
        this.ratePlanChargeId = ratePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public OrderDeltaTcv withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public OrderDeltaTcv withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
}