package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetACallQueue200ApplicationJsonMembersUsers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetACallQueue200ApplicationJsonMembersUsers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public GetACallQueue200ApplicationJsonMembersUsersLevelEnum level;
    public GetACallQueue200ApplicationJsonMembersUsers withLevel(GetACallQueue200ApplicationJsonMembersUsersLevelEnum level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetACallQueue200ApplicationJsonMembersUsers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receive_call")
    public Boolean receiveCall;
    public GetACallQueue200ApplicationJsonMembersUsers withReceiveCall(Boolean receiveCall) {
        this.receiveCall = receiveCall;
        return this;
    }
}