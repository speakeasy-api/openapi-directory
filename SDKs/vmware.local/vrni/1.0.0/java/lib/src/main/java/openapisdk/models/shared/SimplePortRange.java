package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SimplePortRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Integer end;
    public SimplePortRange withEnd(Integer end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Integer start;
    public SimplePortRange withStart(Integer start) {
        this.start = start;
        return this;
    }
}