package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataExtractsEventData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromDate")
    public String fromDate;
    public DataExtractsEventData withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toDate")
    public String toDate;
    public DataExtractsEventData withToDate(String toDate) {
        this.toDate = toDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userCount")
    public Integer userCount;
    public DataExtractsEventData withUserCount(Integer userCount) {
        this.userCount = userCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userData")
    public DataExtractsEventUserData[] userData;
    public DataExtractsEventData withUserData(DataExtractsEventUserData[] userData) {
        this.userData = userData;
        return this;
    }
}