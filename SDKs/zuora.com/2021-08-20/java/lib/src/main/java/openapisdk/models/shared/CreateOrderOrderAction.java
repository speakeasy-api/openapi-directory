package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrderOrderAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addProduct")
    public CreateOrderRatePlanOverride addProduct;
    public CreateOrderOrderAction withAddProduct(CreateOrderRatePlanOverride addProduct) {
        this.addProduct = addProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelSubscription")
    public CancelSubscription cancelSubscription;
    public CreateOrderOrderAction withCancelSubscription(CancelSubscription cancelSubscription) {
        this.cancelSubscription = cancelSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createSubscription")
    public CreateOrderCreateSubscription createSubscription;
    public CreateOrderOrderAction withCreateSubscription(CreateOrderCreateSubscription createSubscription) {
        this.createSubscription = createSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public CreateOrderOrderAction withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerTransfer")
    public OwnerTransfer ownerTransfer;
    public CreateOrderOrderAction withOwnerTransfer(OwnerTransfer ownerTransfer) {
        this.ownerTransfer = ownerTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeProduct")
    public RemoveProduct removeProduct;
    public CreateOrderOrderAction withRemoveProduct(RemoveProduct removeProduct) {
        this.removeProduct = removeProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resume")
    public CreateOrderResume resume;
    public CreateOrderOrderAction withResume(CreateOrderResume resume) {
        this.resume = resume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspend")
    public CreateOrderSuspend suspend;
    public CreateOrderOrderAction withSuspend(CreateOrderSuspend suspend) {
        this.suspend = suspend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public CreateOrderTermsAndConditions termsAndConditions;
    public CreateOrderOrderAction withTermsAndConditions(CreateOrderTermsAndConditions termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerDates")
    public TriggerDate[] triggerDates;
    public CreateOrderOrderAction withTriggerDates(TriggerDate[] triggerDates) {
        this.triggerDates = triggerDates;
        return this;
    }
    @JsonProperty("type")
    public CreateOrderOrderActionTypeEnum type;
    public CreateOrderOrderAction withType(CreateOrderOrderActionTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateProduct")
    public CreateOrderRatePlanUpdate updateProduct;
    public CreateOrderOrderAction withUpdateProduct(CreateOrderRatePlanUpdate updateProduct) {
        this.updateProduct = updateProduct;
        return this;
    }
}