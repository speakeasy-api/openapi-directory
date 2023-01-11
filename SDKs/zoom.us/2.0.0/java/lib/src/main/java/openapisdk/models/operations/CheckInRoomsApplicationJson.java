package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CheckInRoomsApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public CheckInRoomsApplicationJson withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public CheckInRoomsApplicationJsonParams params;
    public CheckInRoomsApplicationJson withParams(CheckInRoomsApplicationJsonParams params) {
        this.params = params;
        return this;
    }
}