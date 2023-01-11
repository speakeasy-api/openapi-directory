package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDebitMemoApplicationPartCollectionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationParts")
    public GetDebitMemoApplicationPartType[] applicationParts;
    public GetDebitMemoApplicationPartCollectionType withApplicationParts(GetDebitMemoApplicationPartType[] applicationParts) {
        this.applicationParts = applicationParts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetDebitMemoApplicationPartCollectionType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetDebitMemoApplicationPartCollectionType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}