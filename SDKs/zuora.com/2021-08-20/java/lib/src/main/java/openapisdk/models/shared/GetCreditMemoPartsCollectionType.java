package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCreditMemoPartsCollectionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetCreditMemoPartsCollectionType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parts")
    public GetCreditMemoPartTypewithSuccess[] parts;
    public GetCreditMemoPartsCollectionType withParts(GetCreditMemoPartTypewithSuccess[] parts) {
        this.parts = parts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetCreditMemoPartsCollectionType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}