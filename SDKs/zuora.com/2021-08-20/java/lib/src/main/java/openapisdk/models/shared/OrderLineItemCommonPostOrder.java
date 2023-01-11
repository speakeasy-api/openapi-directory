package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLineItemCommonPostOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UOM")
    public String uom;
    public OrderLineItemCommonPostOrder withUom(String uom) {
        this.uom = uom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountPerUnit")
    public Double amountPerUnit;
    public OrderLineItemCommonPostOrder withAmountPerUnit(Double amountPerUnit) {
        this.amountPerUnit = amountPerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billTargetDate")
    public LocalDate billTargetDate;
    public OrderLineItemCommonPostOrder withBillTargetDate(LocalDate billTargetDate) {
        this.billTargetDate = billTargetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public OrderLineItemCommonPostOrder withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deferredRevenueAccountingCode")
    public String deferredRevenueAccountingCode;
    public OrderLineItemCommonPostOrder withDeferredRevenueAccountingCode(String deferredRevenueAccountingCode) {
        this.deferredRevenueAccountingCode = deferredRevenueAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OrderLineItemCommonPostOrder withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemName")
    public String itemName;
    public OrderLineItemCommonPostOrder withItemName(String itemName) {
        this.itemName = itemName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemState")
    public OrderLineItemCommonPostOrderItemStateEnum itemState;
    public OrderLineItemCommonPostOrder withItemState(OrderLineItemCommonPostOrderItemStateEnum itemState) {
        this.itemState = itemState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemType")
    public OrderLineItemCommonPostOrderItemTypeEnum itemType;
    public OrderLineItemCommonPostOrder withItemType(OrderLineItemCommonPostOrderItemTypeEnum itemType) {
        this.itemType = itemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPricePerUnit")
    public Double listPricePerUnit;
    public OrderLineItemCommonPostOrder withListPricePerUnit(Double listPricePerUnit) {
        this.listPricePerUnit = listPricePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public OrderLineItemCommonPostOrder withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public LocalDate productRatePlanChargeId;
    public OrderLineItemCommonPostOrder withProductRatePlanChargeId(LocalDate productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderNumber")
    public String purchaseOrderNumber;
    public OrderLineItemCommonPostOrder withPurchaseOrderNumber(String purchaseOrderNumber) {
        this.purchaseOrderNumber = purchaseOrderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public OrderLineItemCommonPostOrder withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recognizedRevenueAccountingCode")
    public String recognizedRevenueAccountingCode;
    public OrderLineItemCommonPostOrder withRecognizedRevenueAccountingCode(String recognizedRevenueAccountingCode) {
        this.recognizedRevenueAccountingCode = recognizedRevenueAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueRecognitionRule")
    public String revenueRecognitionRule;
    public OrderLineItemCommonPostOrder withRevenueRecognitionRule(String revenueRecognitionRule) {
        this.revenueRecognitionRule = revenueRecognitionRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soldTo")
    public String soldTo;
    public OrderLineItemCommonPostOrder withSoldTo(String soldTo) {
        this.soldTo = soldTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soldToData")
    public OrderContact soldToData;
    public OrderLineItemCommonPostOrder withSoldToData(OrderContact soldToData) {
        this.soldToData = soldToData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCode")
    public String taxCode;
    public OrderLineItemCommonPostOrder withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxMode")
    public OrderLineItemCommonPostOrderTaxModeEnum taxMode;
    public OrderLineItemCommonPostOrder withTaxMode(OrderLineItemCommonPostOrderTaxModeEnum taxMode) {
        this.taxMode = taxMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionDate")
    public LocalDate transactionDate;
    public OrderLineItemCommonPostOrder withTransactionDate(LocalDate transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
}