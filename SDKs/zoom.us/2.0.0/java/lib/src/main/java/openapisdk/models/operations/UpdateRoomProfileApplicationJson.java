package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRoomProfileApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basic")
    public UpdateRoomProfileApplicationJsonBasic basic;
    public UpdateRoomProfileApplicationJson withBasic(UpdateRoomProfileApplicationJsonBasic basic) {
        this.basic = basic;
        return this;
    }
}