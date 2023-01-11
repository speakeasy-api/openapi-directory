package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderAction
 * Represents the processed order action.
**/
public class OrderAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addProduct")
    public RatePlanOverride addProduct;
    public OrderAction withAddProduct(RatePlanOverride addProduct) {
        this.addProduct = addProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelSubscription")
    public CancelSubscription cancelSubscription;
    public OrderAction withCancelSubscription(CancelSubscription cancelSubscription) {
        this.cancelSubscription = cancelSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createSubscription")
    public CreateSubscription createSubscription;
    public OrderAction withCreateSubscription(CreateSubscription createSubscription) {
        this.createSubscription = createSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public OrderAction withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderAction withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItems")
    public OrderItem[] orderItems;
    public OrderAction withOrderItems(OrderItem[] orderItems) {
        this.orderItems = orderItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderMetrics")
    public OrderMetric[] orderMetrics;
    public OrderAction withOrderMetrics(OrderMetric[] orderMetrics) {
        this.orderMetrics = orderMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerTransfer")
    public OwnerTransfer ownerTransfer;
    public OrderAction withOwnerTransfer(OwnerTransfer ownerTransfer) {
        this.ownerTransfer = ownerTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeProduct")
    public RemoveProduct removeProduct;
    public OrderAction withRemoveProduct(RemoveProduct removeProduct) {
        this.removeProduct = removeProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resume")
    public GetOrderResume resume;
    public OrderAction withResume(GetOrderResume resume) {
        this.resume = resume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence")
    public Long sequence;
    public OrderAction withSequence(Long sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspend")
    public GetOrderSuspend suspend;
    public OrderAction withSuspend(GetOrderSuspend suspend) {
        this.suspend = suspend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public TermsAndConditions termsAndConditions;
    public OrderAction withTermsAndConditions(TermsAndConditions termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerDates")
    public TriggerDate[] triggerDates;
    public OrderAction withTriggerDates(TriggerDate[] triggerDates) {
        this.triggerDates = triggerDates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public OrderActionTypeEnum type;
    public OrderAction withType(OrderActionTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateProduct")
    public RatePlanUpdate updateProduct;
    public OrderAction withUpdateProduct(RatePlanUpdate updateProduct) {
        this.updateProduct = updateProduct;
        return this;
    }
}