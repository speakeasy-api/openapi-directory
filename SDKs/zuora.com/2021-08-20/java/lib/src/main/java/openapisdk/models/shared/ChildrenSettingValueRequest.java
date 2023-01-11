package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChildrenSettingValueRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public java.util.Map<String, Object> body;
    public ChildrenSettingValueRequest withBody(java.util.Map<String, Object> body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ChildrenSettingValueRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public ChildrenSettingValueRequestMethodEnum method;
    public ChildrenSettingValueRequest withMethod(ChildrenSettingValueRequestMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ChildrenSettingValueRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}