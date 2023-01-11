package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataExtractsEventUserData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public DataExtractsEventLinks[] links;
    public DataExtractsEventUserData withLinks(DataExtractsEventLinks[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public DataExtractsUser user;
    public DataExtractsEventUserData withUser(DataExtractsUser user) {
        this.user = user;
        return this;
    }
}