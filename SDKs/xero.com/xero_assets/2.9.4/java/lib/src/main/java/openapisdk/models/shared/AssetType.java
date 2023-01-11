package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssetType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accumulatedDepreciationAccountId")
    public String accumulatedDepreciationAccountId;
    public AssetType withAccumulatedDepreciationAccountId(String accumulatedDepreciationAccountId) {
        this.accumulatedDepreciationAccountId = accumulatedDepreciationAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetTypeId")
    public String assetTypeId;
    public AssetType withAssetTypeId(String assetTypeId) {
        this.assetTypeId = assetTypeId;
        return this;
    }
    @JsonProperty("assetTypeName")
    public String assetTypeName;
    public AssetType withAssetTypeName(String assetTypeName) {
        this.assetTypeName = assetTypeName;
        return this;
    }
    @JsonProperty("bookDepreciationSetting")
    public Object bookDepreciationSetting;
    public AssetType withBookDepreciationSetting(Object bookDepreciationSetting) {
        this.bookDepreciationSetting = bookDepreciationSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("depreciationExpenseAccountId")
    public String depreciationExpenseAccountId;
    public AssetType withDepreciationExpenseAccountId(String depreciationExpenseAccountId) {
        this.depreciationExpenseAccountId = depreciationExpenseAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedAssetAccountId")
    public String fixedAssetAccountId;
    public AssetType withFixedAssetAccountId(String fixedAssetAccountId) {
        this.fixedAssetAccountId = fixedAssetAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locks")
    public Long locks;
    public AssetType withLocks(Long locks) {
        this.locks = locks;
        return this;
    }
}