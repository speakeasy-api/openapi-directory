package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public java.util.Map<String, Object> body;
    public SettingValueRequest withBody(java.util.Map<String, Object> body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("children")
    public ChildrenSettingValueRequest[] children;
    public SettingValueRequest withChildren(ChildrenSettingValueRequest[] children) {
        this.children = children;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SettingValueRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public SettingValueRequestMethodEnum method;
    public SettingValueRequest withMethod(SettingValueRequestMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SettingValueRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}