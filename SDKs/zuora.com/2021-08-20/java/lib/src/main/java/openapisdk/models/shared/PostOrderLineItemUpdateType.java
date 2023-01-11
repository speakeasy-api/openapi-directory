package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrderLineItemUpdateType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UOM")
    public String uom;
    public PostOrderLineItemUpdateType withUom(String uom) {
        this.uom = uom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingCode")
    public String accountingCode;
    public PostOrderLineItemUpdateType withAccountingCode(String accountingCode) {
        this.accountingCode = accountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountPerUnit")
    public Double amountPerUnit;
    public PostOrderLineItemUpdateType withAmountPerUnit(Double amountPerUnit) {
        this.amountPerUnit = amountPerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billTargetDate")
    public LocalDate billTargetDate;
    public PostOrderLineItemUpdateType withBillTargetDate(LocalDate billTargetDate) {
        this.billTargetDate = billTargetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public PostOrderLineItemUpdateType withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deferredRevenueAccountingCode")
    public String deferredRevenueAccountingCode;
    public PostOrderLineItemUpdateType withDeferredRevenueAccountingCode(String deferredRevenueAccountingCode) {
        this.deferredRevenueAccountingCode = deferredRevenueAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostOrderLineItemUpdateType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public PostOrderLineItemUpdateType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemName")
    public String itemName;
    public PostOrderLineItemUpdateType withItemName(String itemName) {
        this.itemName = itemName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemNumber")
    public String itemNumber;
    public PostOrderLineItemUpdateType withItemNumber(String itemNumber) {
        this.itemNumber = itemNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemState")
    public PostOrderLineItemUpdateTypeItemStateEnum itemState;
    public PostOrderLineItemUpdateType withItemState(PostOrderLineItemUpdateTypeItemStateEnum itemState) {
        this.itemState = itemState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemType")
    public PostOrderLineItemUpdateTypeItemTypeEnum itemType;
    public PostOrderLineItemUpdateType withItemType(PostOrderLineItemUpdateTypeItemTypeEnum itemType) {
        this.itemType = itemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPricePerUnit")
    public Double listPricePerUnit;
    public PostOrderLineItemUpdateType withListPricePerUnit(Double listPricePerUnit) {
        this.listPricePerUnit = listPricePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public PostOrderLineItemUpdateType withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderNumber")
    public String purchaseOrderNumber;
    public PostOrderLineItemUpdateType withPurchaseOrderNumber(String purchaseOrderNumber) {
        this.purchaseOrderNumber = purchaseOrderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public PostOrderLineItemUpdateType withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recognizedRevenueAccountingCode")
    public String recognizedRevenueAccountingCode;
    public PostOrderLineItemUpdateType withRecognizedRevenueAccountingCode(String recognizedRevenueAccountingCode) {
        this.recognizedRevenueAccountingCode = recognizedRevenueAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueRecognitionRule")
    public String revenueRecognitionRule;
    public PostOrderLineItemUpdateType withRevenueRecognitionRule(String revenueRecognitionRule) {
        this.revenueRecognitionRule = revenueRecognitionRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCode")
    public String taxCode;
    public PostOrderLineItemUpdateType withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxMode")
    public PostOrderLineItemUpdateTypeTaxModeEnum taxMode;
    public PostOrderLineItemUpdateType withTaxMode(PostOrderLineItemUpdateTypeTaxModeEnum taxMode) {
        this.taxMode = taxMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionDate")
    public LocalDate transactionDate;
    public PostOrderLineItemUpdateType withTransactionDate(LocalDate transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
}