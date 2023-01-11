package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataExtractsEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public DataExtractsEventData data;
    public DataExtractsEvent withData(DataExtractsEventData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public String info;
    public DataExtractsEvent withInfo(String info) {
        this.info = info;
        return this;
    }
}