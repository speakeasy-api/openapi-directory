package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetASharedLineGroup200ApplicationJsonMembersUsers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetASharedLineGroup200ApplicationJsonMembersUsers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetASharedLineGroup200ApplicationJsonMembersUsers withName(String name) {
        this.name = name;
        return this;
    }
}