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

public class ActionAmendInvoiceItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountingCode")
    public String accountingCode;
    public ActionAmendInvoiceItem withAccountingCode(String accountingCode) {
        this.accountingCode = accountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppliedToInvoiceItemId")
    public String appliedToInvoiceItemId;
    public ActionAmendInvoiceItem withAppliedToInvoiceItemId(String appliedToInvoiceItemId) {
        this.appliedToInvoiceItemId = appliedToInvoiceItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeAmount")
    public Double chargeAmount;
    public ActionAmendInvoiceItem withChargeAmount(Double chargeAmount) {
        this.chargeAmount = chargeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ChargeDate")
    public OffsetDateTime chargeDate;
    public ActionAmendInvoiceItem withChargeDate(OffsetDateTime chargeDate) {
        this.chargeDate = chargeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeDescription")
    public String chargeDescription;
    public ActionAmendInvoiceItem withChargeDescription(String chargeDescription) {
        this.chargeDescription = chargeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeId")
    public String chargeId;
    public ActionAmendInvoiceItem withChargeId(String chargeId) {
        this.chargeId = chargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeName")
    public String chargeName;
    public ActionAmendInvoiceItem withChargeName(String chargeName) {
        this.chargeName = chargeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeNumber")
    public String chargeNumber;
    public ActionAmendInvoiceItem withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeType")
    public String chargeType;
    public ActionAmendInvoiceItem withChargeType(String chargeType) {
        this.chargeType = chargeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public ActionAmendInvoiceItem withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public ActionAmendInvoiceItem withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceId")
    public String invoiceId;
    public ActionAmendInvoiceItem withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingType")
    public Double processingType;
    public ActionAmendInvoiceItem withProcessingType(Double processingType) {
        this.processingType = processingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductDescription")
    public String productDescription;
    public ActionAmendInvoiceItem withProductDescription(String productDescription) {
        this.productDescription = productDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductId")
    public String productId;
    public ActionAmendInvoiceItem withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductName")
    public String productName;
    public ActionAmendInvoiceItem withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductRatePlanChargeId")
    public String productRatePlanChargeId;
    public ActionAmendInvoiceItem withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quantity")
    public Double quantity;
    public ActionAmendInvoiceItem withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatePlanChargeId")
    public String ratePlanChargeId;
    public ActionAmendInvoiceItem withRatePlanChargeId(String ratePlanChargeId) {
        this.ratePlanChargeId = ratePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevRecCode")
    public String revRecCode;
    public ActionAmendInvoiceItem withRevRecCode(String revRecCode) {
        this.revRecCode = revRecCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevRecStartDate")
    public LocalDate revRecStartDate;
    public ActionAmendInvoiceItem withRevRecStartDate(LocalDate revRecStartDate) {
        this.revRecStartDate = revRecStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevRecTriggerCondition")
    public String revRecTriggerCondition;
    public ActionAmendInvoiceItem withRevRecTriggerCondition(String revRecTriggerCondition) {
        this.revRecTriggerCondition = revRecTriggerCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SKU")
    public String sku;
    public ActionAmendInvoiceItem withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceEndDate")
    public LocalDate serviceEndDate;
    public ActionAmendInvoiceItem withServiceEndDate(LocalDate serviceEndDate) {
        this.serviceEndDate = serviceEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceStartDate")
    public LocalDate serviceStartDate;
    public ActionAmendInvoiceItem withServiceStartDate(LocalDate serviceStartDate) {
        this.serviceStartDate = serviceStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionId")
    public String subscriptionId;
    public ActionAmendInvoiceItem withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionNumber")
    public String subscriptionNumber;
    public ActionAmendInvoiceItem withSubscriptionNumber(String subscriptionNumber) {
        this.subscriptionNumber = subscriptionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxAmount")
    public Double taxAmount;
    public ActionAmendInvoiceItem withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxCode")
    public String taxCode;
    public ActionAmendInvoiceItem withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxExemptAmount")
    public Double taxExemptAmount;
    public ActionAmendInvoiceItem withTaxExemptAmount(Double taxExemptAmount) {
        this.taxExemptAmount = taxExemptAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxMode")
    public String taxMode;
    public ActionAmendInvoiceItem withTaxMode(String taxMode) {
        this.taxMode = taxMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UOM")
    public String uom;
    public ActionAmendInvoiceItem withUom(String uom) {
        this.uom = uom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnitPrice")
    public Double unitPrice;
    public ActionAmendInvoiceItem withUnitPrice(Double unitPrice) {
        this.unitPrice = unitPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public ActionAmendInvoiceItem withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public ActionAmendInvoiceItem withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}