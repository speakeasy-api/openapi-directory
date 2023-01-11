package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewOrderOrderAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addProduct")
    public PreviewOrderRatePlanOverride addProduct;
    public PreviewOrderOrderAction withAddProduct(PreviewOrderRatePlanOverride addProduct) {
        this.addProduct = addProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelSubscription")
    public CancelSubscription cancelSubscription;
    public PreviewOrderOrderAction withCancelSubscription(CancelSubscription cancelSubscription) {
        this.cancelSubscription = cancelSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createSubscription")
    public PreviewOrderCreateSubscription createSubscription;
    public PreviewOrderOrderAction withCreateSubscription(PreviewOrderCreateSubscription createSubscription) {
        this.createSubscription = createSubscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public PreviewOrderOrderAction withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerTransfer")
    public OwnerTransfer ownerTransfer;
    public PreviewOrderOrderAction withOwnerTransfer(OwnerTransfer ownerTransfer) {
        this.ownerTransfer = ownerTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeProduct")
    public RemoveProduct removeProduct;
    public PreviewOrderOrderAction withRemoveProduct(RemoveProduct removeProduct) {
        this.removeProduct = removeProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resume")
    public CreateOrderResume resume;
    public PreviewOrderOrderAction withResume(CreateOrderResume resume) {
        this.resume = resume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspend")
    public CreateOrderSuspend suspend;
    public PreviewOrderOrderAction withSuspend(CreateOrderSuspend suspend) {
        this.suspend = suspend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public CreateOrderTermsAndConditions termsAndConditions;
    public PreviewOrderOrderAction withTermsAndConditions(CreateOrderTermsAndConditions termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerDates")
    public TriggerDate[] triggerDates;
    public PreviewOrderOrderAction withTriggerDates(TriggerDate[] triggerDates) {
        this.triggerDates = triggerDates;
        return this;
    }
    @JsonProperty("type")
    public PreviewOrderOrderActionTypeEnum type;
    public PreviewOrderOrderAction withType(PreviewOrderOrderActionTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateProduct")
    public PreviewOrderRatePlanUpdate updateProduct;
    public PreviewOrderOrderAction withUpdateProduct(PreviewOrderRatePlanUpdate updateProduct) {
        this.updateProduct = updateProduct;
        return this;
    }
}