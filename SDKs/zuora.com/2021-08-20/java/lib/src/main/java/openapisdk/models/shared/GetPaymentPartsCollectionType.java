package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPaymentPartsCollectionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetPaymentPartsCollectionType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parts")
    public GetPaymentPartTypewithSuccess[] parts;
    public GetPaymentPartsCollectionType withParts(GetPaymentPartTypewithSuccess[] parts) {
        this.parts = parts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetPaymentPartsCollectionType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}