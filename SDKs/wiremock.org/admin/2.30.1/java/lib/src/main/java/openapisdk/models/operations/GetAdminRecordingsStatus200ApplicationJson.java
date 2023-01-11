package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAdminRecordingsStatus200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetAdminRecordingsStatus200ApplicationJsonStatusEnum status;
    public GetAdminRecordingsStatus200ApplicationJson withStatus(GetAdminRecordingsStatus200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}