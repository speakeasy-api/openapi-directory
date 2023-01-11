package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataExtractsUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginName")
    public String loginName;
    public DataExtractsUser withLoginName(String loginName) {
        this.loginName = loginName;
        return this;
    }
}