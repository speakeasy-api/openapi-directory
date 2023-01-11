package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Line {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handset_name")
    public String handsetName;
    public Line withHandsetName(String handsetName) {
        this.handsetName = handsetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_id")
    public String sipId;
    public Line withSipId(String sipId) {
        this.sipId = sipId;
        return this;
    }
}