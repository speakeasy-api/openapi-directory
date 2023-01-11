package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Vlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("begin")
    public Long begin;
    public Vlan withBegin(Long begin) {
        this.begin = begin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Long end;
    public Vlan withEnd(Long end) {
        this.end = end;
        return this;
    }
}