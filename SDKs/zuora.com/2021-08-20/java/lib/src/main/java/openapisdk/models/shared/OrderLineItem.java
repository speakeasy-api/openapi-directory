package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UOM")
    public String uom;
    public OrderLineItem withUom(String uom) {
        this.uom = uom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingCode")
    public String accountingCode;
    public OrderLineItem withAccountingCode(String accountingCode) {
        this.accountingCode = accountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public OrderLineItem withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountPerUnit")
    public Double amountPerUnit;
    public OrderLineItem withAmountPerUnit(Double amountPerUnit) {
        this.amountPerUnit = amountPerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billTargetDate")
    public LocalDate billTargetDate;
    public OrderLineItem withBillTargetDate(LocalDate billTargetDate) {
        this.billTargetDate = billTargetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public OrderLineItem withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deferredRevenueAccountingCode")
    public String deferredRevenueAccountingCode;
    public OrderLineItem withDeferredRevenueAccountingCode(String deferredRevenueAccountingCode) {
        this.deferredRevenueAccountingCode = deferredRevenueAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OrderLineItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderLineItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemName")
    public String itemName;
    public OrderLineItem withItemName(String itemName) {
        this.itemName = itemName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemNumber")
    public String itemNumber;
    public OrderLineItem withItemNumber(String itemNumber) {
        this.itemNumber = itemNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemState")
    public OrderLineItemItemStateEnum itemState;
    public OrderLineItem withItemState(OrderLineItemItemStateEnum itemState) {
        this.itemState = itemState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemType")
    public OrderLineItemItemTypeEnum itemType;
    public OrderLineItem withItemType(OrderLineItemItemTypeEnum itemType) {
        this.itemType = itemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPricePerUnit")
    public Double listPricePerUnit;
    public OrderLineItem withListPricePerUnit(Double listPricePerUnit) {
        this.listPricePerUnit = listPricePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public OrderLineItem withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlanChargeId")
    public LocalDate productRatePlanChargeId;
    public OrderLineItem withProductRatePlanChargeId(LocalDate productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderNumber")
    public String purchaseOrderNumber;
    public OrderLineItem withPurchaseOrderNumber(String purchaseOrderNumber) {
        this.purchaseOrderNumber = purchaseOrderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public OrderLineItem withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recognizedRevenueAccountingCode")
    public String recognizedRevenueAccountingCode;
    public OrderLineItem withRecognizedRevenueAccountingCode(String recognizedRevenueAccountingCode) {
        this.recognizedRevenueAccountingCode = recognizedRevenueAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueRecognitionRule")
    public String revenueRecognitionRule;
    public OrderLineItem withRevenueRecognitionRule(String revenueRecognitionRule) {
        this.revenueRecognitionRule = revenueRecognitionRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soldTo")
    public String soldTo;
    public OrderLineItem withSoldTo(String soldTo) {
        this.soldTo = soldTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soldToData")
    public OrderContactRetrieveOrderLineItem soldToData;
    public OrderLineItem withSoldToData(OrderContactRetrieveOrderLineItem soldToData) {
        this.soldToData = soldToData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCode")
    public String taxCode;
    public OrderLineItem withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxMode")
    public OrderLineItemTaxModeEnum taxMode;
    public OrderLineItem withTaxMode(OrderLineItemTaxModeEnum taxMode) {
        this.taxMode = taxMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionDate")
    public LocalDate transactionDate;
    public OrderLineItem withTransactionDate(LocalDate transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
}