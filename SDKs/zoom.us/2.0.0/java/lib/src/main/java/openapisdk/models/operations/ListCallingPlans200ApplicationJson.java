package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCallingPlans200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calling_plans")
    public ListCallingPlans200ApplicationJsonCallingPlans[] callingPlans;
    public ListCallingPlans200ApplicationJson withCallingPlans(ListCallingPlans200ApplicationJsonCallingPlans[] callingPlans) {
        this.callingPlans = callingPlans;
        return this;
    }
}