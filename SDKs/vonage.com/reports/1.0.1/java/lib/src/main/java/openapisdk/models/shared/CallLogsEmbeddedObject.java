package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CallLogsEmbeddedObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_logs")
    public CallLog[] callLogs;
    public CallLogsEmbeddedObject withCallLogs(CallLog[] callLogs) {
        this.callLogs = callLogs;
        return this;
    }
}