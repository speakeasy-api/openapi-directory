package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQueryEmailTemplates200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.GetPublicEmailTemplateResponse[] data;
    public GetQueryEmailTemplates200ApplicationJson withData(openapisdk.models.shared.GetPublicEmailTemplateResponse[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public GetQueryEmailTemplates200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
}