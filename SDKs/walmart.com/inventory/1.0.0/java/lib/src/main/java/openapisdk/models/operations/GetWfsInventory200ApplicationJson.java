package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWfsInventory200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public GetWfsInventory200ApplicationJsonHeaders headers;
    public GetWfsInventory200ApplicationJson withHeaders(GetWfsInventory200ApplicationJsonHeaders headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public GetWfsInventory200ApplicationJsonPayload payload;
    public GetWfsInventory200ApplicationJson withPayload(GetWfsInventory200ApplicationJsonPayload payload) {
        this.payload = payload;
        return this;
    }
}