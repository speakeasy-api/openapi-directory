package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEntityConnectionsResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityConnections")
    public GetEntityConnectionsArrayItemsType[] entityConnections;
    public GetEntityConnectionsResponseType withEntityConnections(GetEntityConnectionsArrayItemsType[] entityConnections) {
        this.entityConnections = entityConnections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetEntityConnectionsResponseType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetEntityConnectionsResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}