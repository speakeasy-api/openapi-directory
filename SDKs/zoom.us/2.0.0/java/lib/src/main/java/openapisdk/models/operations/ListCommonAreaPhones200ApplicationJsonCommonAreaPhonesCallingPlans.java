package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans withType(String type) {
        this.type = type;
        return this;
    }
}