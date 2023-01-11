package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HoldingAssetClassificationListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetClassificationList")
    public AssetClassificationList[] assetClassificationList;
    public HoldingAssetClassificationListResponse withAssetClassificationList(AssetClassificationList[] assetClassificationList) {
        this.assetClassificationList = assetClassificationList;
        return this;
    }
}