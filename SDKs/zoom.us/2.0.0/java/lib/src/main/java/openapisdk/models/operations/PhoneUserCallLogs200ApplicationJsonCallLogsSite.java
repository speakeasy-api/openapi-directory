package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PhoneUserCallLogs200ApplicationJsonCallLogsSite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PhoneUserCallLogs200ApplicationJsonCallLogsSite withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PhoneUserCallLogs200ApplicationJsonCallLogsSite withName(String name) {
        this.name = name;
        return this;
    }
}