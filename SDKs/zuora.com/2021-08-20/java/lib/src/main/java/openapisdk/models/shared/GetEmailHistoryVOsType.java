package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEmailHistoryVOsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailHistories")
    public GetEmailHistoryVoType[] emailHistories;
    public GetEmailHistoryVOsType withEmailHistories(GetEmailHistoryVoType[] emailHistories) {
        this.emailHistories = emailHistories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetEmailHistoryVOsType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetEmailHistoryVOsType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}