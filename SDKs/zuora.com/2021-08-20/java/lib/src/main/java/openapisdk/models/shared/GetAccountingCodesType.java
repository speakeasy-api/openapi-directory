package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountingCodesType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingCodes")
    public java.util.Map<String, Object>[] accountingCodes;
    public GetAccountingCodesType withAccountingCodes(java.util.Map<String, Object>[] accountingCodes) {
        this.accountingCodes = accountingCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetAccountingCodesType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetAccountingCodesType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}