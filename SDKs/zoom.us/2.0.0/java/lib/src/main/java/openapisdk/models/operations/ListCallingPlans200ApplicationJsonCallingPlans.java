package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCallingPlans200ApplicationJsonCallingPlans {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigned")
    public Long assigned;
    public ListCallingPlans200ApplicationJsonCallingPlans withAssigned(Long assigned) {
        this.assigned = assigned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available")
    public Long available;
    public ListCallingPlans200ApplicationJsonCallingPlans withAvailable(Long available) {
        this.available = available;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListCallingPlans200ApplicationJsonCallingPlans withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribed")
    public Long subscribed;
    public ListCallingPlans200ApplicationJsonCallingPlans withSubscribed(Long subscribed) {
        this.subscribed = subscribed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public ListCallingPlans200ApplicationJsonCallingPlans withType(Long type) {
        this.type = type;
        return this;
    }
}