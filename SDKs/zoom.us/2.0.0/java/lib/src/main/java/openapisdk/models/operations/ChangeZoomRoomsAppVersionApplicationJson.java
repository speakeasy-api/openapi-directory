package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChangeZoomRoomsAppVersionApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public ChangeZoomRoomsAppVersionApplicationJsonActionEnum action;
    public ChangeZoomRoomsAppVersionApplicationJson withAction(ChangeZoomRoomsAppVersionApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
}