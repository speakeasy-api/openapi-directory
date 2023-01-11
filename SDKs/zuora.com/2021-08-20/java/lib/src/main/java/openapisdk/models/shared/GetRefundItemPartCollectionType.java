package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRefundItemPartCollectionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemParts")
    public GetRefundItemPartTypewithSuccess[] itemParts;
    public GetRefundItemPartCollectionType withItemParts(GetRefundItemPartTypewithSuccess[] itemParts) {
        this.itemParts = itemParts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetRefundItemPartCollectionType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetRefundItemPartCollectionType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}