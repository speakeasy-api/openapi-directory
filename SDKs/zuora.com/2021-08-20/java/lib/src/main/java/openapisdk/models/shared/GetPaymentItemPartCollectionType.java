package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPaymentItemPartCollectionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemParts")
    public GetPaymentItemPartTypewithSuccess[] itemParts;
    public GetPaymentItemPartCollectionType withItemParts(GetPaymentItemPartTypewithSuccess[] itemParts) {
        this.itemParts = itemParts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetPaymentItemPartCollectionType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetPaymentItemPartCollectionType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}