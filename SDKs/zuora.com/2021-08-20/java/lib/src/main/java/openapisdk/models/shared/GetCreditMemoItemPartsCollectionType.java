package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCreditMemoItemPartsCollectionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemParts")
    public GetCreditMemoItemPartTypewithSuccess[] itemParts;
    public GetCreditMemoItemPartsCollectionType withItemParts(GetCreditMemoItemPartTypewithSuccess[] itemParts) {
        this.itemParts = itemParts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetCreditMemoItemPartsCollectionType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetCreditMemoItemPartsCollectionType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}