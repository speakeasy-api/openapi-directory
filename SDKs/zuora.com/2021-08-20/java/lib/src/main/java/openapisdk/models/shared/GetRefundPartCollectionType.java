package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRefundPartCollectionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parts")
    public RefundPartResponseTypewithSuccess[] parts;
    public GetRefundPartCollectionType withParts(RefundPartResponseTypewithSuccess[] parts) {
        this.parts = parts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetRefundPartCollectionType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}