package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Asset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingBookValue")
    public Double accountingBookValue;
    public Asset withAccountingBookValue(Double accountingBookValue) {
        this.accountingBookValue = accountingBookValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetId")
    public String assetId;
    public Asset withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @JsonProperty("assetName")
    public String assetName;
    public Asset withAssetName(String assetName) {
        this.assetName = assetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetNumber")
    public String assetNumber;
    public Asset withAssetNumber(String assetNumber) {
        this.assetNumber = assetNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetStatus")
    public AssetStatusEnum assetStatus;
    public Asset withAssetStatus(AssetStatusEnum assetStatus) {
        this.assetStatus = assetStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetTypeId")
    public String assetTypeId;
    public Asset withAssetTypeId(String assetTypeId) {
        this.assetTypeId = assetTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookDepreciationDetail")
    public Object bookDepreciationDetail;
    public Asset withBookDepreciationDetail(Object bookDepreciationDetail) {
        this.bookDepreciationDetail = bookDepreciationDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookDepreciationSetting")
    public Object bookDepreciationSetting;
    public Asset withBookDepreciationSetting(Object bookDepreciationSetting) {
        this.bookDepreciationSetting = bookDepreciationSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRollback")
    public Boolean canRollback;
    public Asset withCanRollback(Boolean canRollback) {
        this.canRollback = canRollback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disposalDate")
    public LocalDate disposalDate;
    public Asset withDisposalDate(LocalDate disposalDate) {
        this.disposalDate = disposalDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disposalPrice")
    public Double disposalPrice;
    public Asset withDisposalPrice(Double disposalPrice) {
        this.disposalPrice = disposalPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDeleteEnabledForDate")
    public Boolean isDeleteEnabledForDate;
    public Asset withIsDeleteEnabledForDate(Boolean isDeleteEnabledForDate) {
        this.isDeleteEnabledForDate = isDeleteEnabledForDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseDate")
    public LocalDate purchaseDate;
    public Asset withPurchaseDate(LocalDate purchaseDate) {
        this.purchaseDate = purchaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchasePrice")
    public Double purchasePrice;
    public Asset withPurchasePrice(Double purchasePrice) {
        this.purchasePrice = purchasePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public Asset withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warrantyExpiryDate")
    public String warrantyExpiryDate;
    public Asset withWarrantyExpiryDate(String warrantyExpiryDate) {
        this.warrantyExpiryDate = warrantyExpiryDate;
        return this;
    }
}