package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLineItemCommon {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UOM")
    public String uom;
    public OrderLineItemCommon withUom(String uom) {
        this.uom = uom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingCode")
    public String accountingCode;
    public OrderLineItemCommon withAccountingCode(String accountingCode) {
        this.accountingCode = accountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountPerUnit")
    public Double amountPerUnit;
    public OrderLineItemCommon withAmountPerUnit(Double amountPerUnit) {
        this.amountPerUnit = amountPerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billTargetDate")
    public LocalDate billTargetDate;
    public OrderLineItemCommon withBillTargetDate(LocalDate billTargetDate) {
        this.billTargetDate = billTargetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public OrderLineItemCommon withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deferredRevenueAccountingCode")
    public String deferredRevenueAccountingCode;
    public OrderLineItemCommon withDeferredRevenueAccountingCode(String deferredRevenueAccountingCode) {
        this.deferredRevenueAccountingCode = deferredRevenueAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OrderLineItemCommon withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemName")
    public String itemName;
    public OrderLineItemCommon withItemName(String itemName) {
        this.itemName = itemName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemNumber")
    public String itemNumber;
    public OrderLineItemCommon withItemNumber(String itemNumber) {
        this.itemNumber = itemNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemState")
    public OrderLineItemCommonItemStateEnum itemState;
    public OrderLineItemCommon withItemState(OrderLineItemCommonItemStateEnum itemState) {
        this.itemState = itemState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemType")
    public OrderLineItemCommonItemTypeEnum itemType;
    public OrderLineItemCommon withItemType(OrderLineItemCommonItemTypeEnum itemType) {
        this.itemType = itemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPricePerUnit")
    public Double listPricePerUnit;
    public OrderLineItemCommon withListPricePerUnit(Double listPricePerUnit) {
        this.listPricePerUnit = listPricePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public OrderLineItemCommon withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderNumber")
    public String purchaseOrderNumber;
    public OrderLineItemCommon withPurchaseOrderNumber(String purchaseOrderNumber) {
        this.purchaseOrderNumber = purchaseOrderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public OrderLineItemCommon withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recognizedRevenueAccountingCode")
    public String recognizedRevenueAccountingCode;
    public OrderLineItemCommon withRecognizedRevenueAccountingCode(String recognizedRevenueAccountingCode) {
        this.recognizedRevenueAccountingCode = recognizedRevenueAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueRecognitionRule")
    public String revenueRecognitionRule;
    public OrderLineItemCommon withRevenueRecognitionRule(String revenueRecognitionRule) {
        this.revenueRecognitionRule = revenueRecognitionRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCode")
    public String taxCode;
    public OrderLineItemCommon withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxMode")
    public OrderLineItemCommonTaxModeEnum taxMode;
    public OrderLineItemCommon withTaxMode(OrderLineItemCommonTaxModeEnum taxMode) {
        this.taxMode = taxMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionDate")
    public LocalDate transactionDate;
    public OrderLineItemCommon withTransactionDate(LocalDate transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
}