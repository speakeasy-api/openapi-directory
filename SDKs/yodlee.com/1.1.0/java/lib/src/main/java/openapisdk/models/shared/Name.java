package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Name {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public String first;
    public Name withFirst(String first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullName")
    public String fullName;
    public Name withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public String last;
    public Name withLast(String last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle")
    public String middle;
    public Name withMiddle(String middle) {
        this.middle = middle;
        return this;
    }
}