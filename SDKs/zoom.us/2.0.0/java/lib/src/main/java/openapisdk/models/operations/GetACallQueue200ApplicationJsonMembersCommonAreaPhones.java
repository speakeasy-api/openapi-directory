package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetACallQueue200ApplicationJsonMembersCommonAreaPhones {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetACallQueue200ApplicationJsonMembersCommonAreaPhones withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetACallQueue200ApplicationJsonMembersCommonAreaPhones withName(String name) {
        this.name = name;
        return this;
    }
}