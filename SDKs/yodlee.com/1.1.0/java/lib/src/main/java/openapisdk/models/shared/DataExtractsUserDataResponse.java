package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataExtractsUserDataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userData")
    public DataExtractsUserData[] userData;
    public DataExtractsUserDataResponse withUserData(DataExtractsUserData[] userData) {
        this.userData = userData;
        return this;
    }
}