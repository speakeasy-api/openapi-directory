package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PostBillingPreviewInvoiceItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedToItemId")
    public String appliedToItemId;
    public PostBillingPreviewInvoiceItem withAppliedToItemId(String appliedToItemId) {
        this.appliedToItemId = appliedToItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeAmount")
    public String chargeAmount;
    public PostBillingPreviewInvoiceItem withChargeAmount(String chargeAmount) {
        this.chargeAmount = chargeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("chargeDate")
    public OffsetDateTime chargeDate;
    public PostBillingPreviewInvoiceItem withChargeDate(OffsetDateTime chargeDate) {
        this.chargeDate = chargeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeDescription")
    public String chargeDescription;
    public PostBillingPreviewInvoiceItem withChargeDescription(String chargeDescription) {
        this.chargeDescription = chargeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeId")
    public String chargeId;
    public PostBillingPreviewInvoiceItem withChargeId(String chargeId) {
        this.chargeId = chargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeName")
    public String chargeName;
    public PostBillingPreviewInvoiceItem withChargeName(String chargeName) {
        this.chargeName = chargeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public PostBillingPreviewInvoiceItem withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeType")
    public String chargeType;
    public PostBillingPreviewInvoiceItem withChargeType(String chargeType) {
        this.chargeType = chargeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostBillingPreviewInvoiceItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingType")
    public String processingType;
    public PostBillingPreviewInvoiceItem withProcessingType(String processingType) {
        this.processingType = processingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productName")
    public String productName;
    public PostBillingPreviewInvoiceItem withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public String quantity;
    public PostBillingPreviewInvoiceItem withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceEndDate")
    public LocalDate serviceEndDate;
    public PostBillingPreviewInvoiceItem withServiceEndDate(LocalDate serviceEndDate) {
        this.serviceEndDate = serviceEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceStartDate")
    public LocalDate serviceStartDate;
    public PostBillingPreviewInvoiceItem withServiceStartDate(LocalDate serviceStartDate) {
        this.serviceStartDate = serviceStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionId")
    public String subscriptionId;
    public PostBillingPreviewInvoiceItem withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionName")
    public String subscriptionName;
    public PostBillingPreviewInvoiceItem withSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumber")
    public String subscriptionNumber;
    public PostBillingPreviewInvoiceItem withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public String taxAmount;
    public PostBillingPreviewInvoiceItem withTaxAmount(String taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitOfMeasure")
    public String unitOfMeasure;
    public PostBillingPreviewInvoiceItem withUnitOfMeasure(String unitOfMeasure) {
        this.unitOfMeasure = unitOfMeasure;
        return this;
    }
}