package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLineItemRetrieveOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UOM")
    public String uom;
    public OrderLineItemRetrieveOrder withUom(String uom) {
        this.uom = uom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public OrderLineItemRetrieveOrder withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountPerUnit")
    public Double amountPerUnit;
    public OrderLineItemRetrieveOrder withAmountPerUnit(Double amountPerUnit) {
        this.amountPerUnit = amountPerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billTargetDate")
    public LocalDate billTargetDate;
    public OrderLineItemRetrieveOrder withBillTargetDate(LocalDate billTargetDate) {
        this.billTargetDate = billTargetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public OrderLineItemRetrieveOrder withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deferredRevenueAccountingCode")
    public String deferredRevenueAccountingCode;
    public OrderLineItemRetrieveOrder withDeferredRevenueAccountingCode(String deferredRevenueAccountingCode) {
        this.deferredRevenueAccountingCode = deferredRevenueAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OrderLineItemRetrieveOrder withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderLineItemRetrieveOrder withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemName")
    public String itemName;
    public OrderLineItemRetrieveOrder withItemName(String itemName) {
        this.itemName = itemName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemNumber")
    public String itemNumber;
    public OrderLineItemRetrieveOrder withItemNumber(String itemNumber) {
        this.itemNumber = itemNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemState")
    public OrderLineItemRetrieveOrderItemStateEnum itemState;
    public OrderLineItemRetrieveOrder withItemState(OrderLineItemRetrieveOrderItemStateEnum itemState) {
        this.itemState = itemState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemType")
    public OrderLineItemRetrieveOrderItemTypeEnum itemType;
    public OrderLineItemRetrieveOrder withItemType(OrderLineItemRetrieveOrderItemTypeEnum itemType) {
        this.itemType = itemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPricePerUnit")
    public Double listPricePerUnit;
    public OrderLineItemRetrieveOrder withListPricePerUnit(Double listPricePerUnit) {
        this.listPricePerUnit = listPricePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public OrderLineItemRetrieveOrder withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public LocalDate productRatePlanChargeId;
    public OrderLineItemRetrieveOrder withProductRatePlanChargeId(LocalDate productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderNumber")
    public String purchaseOrderNumber;
    public OrderLineItemRetrieveOrder withPurchaseOrderNumber(String purchaseOrderNumber) {
        this.purchaseOrderNumber = purchaseOrderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public OrderLineItemRetrieveOrder withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recognizedRevenueAccountingCode")
    public String recognizedRevenueAccountingCode;
    public OrderLineItemRetrieveOrder withRecognizedRevenueAccountingCode(String recognizedRevenueAccountingCode) {
        this.recognizedRevenueAccountingCode = recognizedRevenueAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueRecognitionRule")
    public String revenueRecognitionRule;
    public OrderLineItemRetrieveOrder withRevenueRecognitionRule(String revenueRecognitionRule) {
        this.revenueRecognitionRule = revenueRecognitionRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soldTo")
    public String soldTo;
    public OrderLineItemRetrieveOrder withSoldTo(String soldTo) {
        this.soldTo = soldTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soldToData")
    public OrderContactRetrieveOrder soldToData;
    public OrderLineItemRetrieveOrder withSoldToData(OrderContactRetrieveOrder soldToData) {
        this.soldToData = soldToData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCode")
    public String taxCode;
    public OrderLineItemRetrieveOrder withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxMode")
    public OrderLineItemRetrieveOrderTaxModeEnum taxMode;
    public OrderLineItemRetrieveOrder withTaxMode(OrderLineItemRetrieveOrderTaxModeEnum taxMode) {
        this.taxMode = taxMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionDate")
    public LocalDate transactionDate;
    public OrderLineItemRetrieveOrder withTransactionDate(LocalDate transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
}