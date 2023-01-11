package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderActionForEvergreen
 * Represents the processed order action.
**/
public class OrderActionForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addProduct")
    public RatePlanOverrideForEvergreen addProduct;
    public OrderActionForEvergreen withAddProduct(RatePlanOverrideForEvergreen addProduct) {
        this.addProduct = addProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelSubscription")
    public CancelSubscription cancelSubscription;
    public OrderActionForEvergreen withCancelSubscription(CancelSubscription cancelSubscription) {
        this.cancelSubscription = cancelSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createSubscription")
    public CreateSubscriptionForEvergreen createSubscription;
    public OrderActionForEvergreen withCreateSubscription(CreateSubscriptionForEvergreen createSubscription) {
        this.createSubscription = createSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public OrderActionForEvergreen withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderActionForEvergreen withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderMetrics")
    public OrderMetricsForEvergreen[] orderMetrics;
    public OrderActionForEvergreen withOrderMetrics(OrderMetricsForEvergreen[] orderMetrics) {
        this.orderMetrics = orderMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerTransfer")
    public OwnerTransfer ownerTransfer;
    public OrderActionForEvergreen withOwnerTransfer(OwnerTransfer ownerTransfer) {
        this.ownerTransfer = ownerTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeProduct")
    public RemoveProduct removeProduct;
    public OrderActionForEvergreen withRemoveProduct(RemoveProduct removeProduct) {
        this.removeProduct = removeProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resume")
    public GetOrderResume resume;
    public OrderActionForEvergreen withResume(GetOrderResume resume) {
        this.resume = resume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence")
    public Long sequence;
    public OrderActionForEvergreen withSequence(Long sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspend")
    public GetOrderSuspend suspend;
    public OrderActionForEvergreen withSuspend(GetOrderSuspend suspend) {
        this.suspend = suspend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public TermsAndConditions termsAndConditions;
    public OrderActionForEvergreen withTermsAndConditions(TermsAndConditions termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerDates")
    public TriggerDate[] triggerDates;
    public OrderActionForEvergreen withTriggerDates(TriggerDate[] triggerDates) {
        this.triggerDates = triggerDates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public OrderActionForEvergreenTypeEnum type;
    public OrderActionForEvergreen withType(OrderActionForEvergreenTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateProduct")
    public RatePlanUpdateForEvergreen updateProduct;
    public OrderActionForEvergreen withUpdateProduct(RatePlanUpdateForEvergreen updateProduct) {
        this.updateProduct = updateProduct;
        return this;
    }
}