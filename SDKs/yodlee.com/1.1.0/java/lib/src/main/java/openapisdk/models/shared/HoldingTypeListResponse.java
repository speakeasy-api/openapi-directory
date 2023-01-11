package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HoldingTypeListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdingType")
    public HoldingTypeListResponseHoldingTypeEnum[] holdingType;
    public HoldingTypeListResponse withHoldingType(HoldingTypeListResponseHoldingTypeEnum[] holdingType) {
        this.holdingType = holdingType;
        return this;
    }
}