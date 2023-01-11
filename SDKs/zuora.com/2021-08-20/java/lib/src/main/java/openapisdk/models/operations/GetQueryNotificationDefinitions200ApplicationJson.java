package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQueryNotificationDefinitions200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.GetPublicNotificationDefinitionResponse[] data;
    public GetQueryNotificationDefinitions200ApplicationJson withData(openapisdk.models.shared.GetPublicNotificationDefinitionResponse[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public GetQueryNotificationDefinitions200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
}