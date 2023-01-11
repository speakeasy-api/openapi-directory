package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueResponseWrapper {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SettingValueResponseWrapper withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public SettingValueResponseWrapperMethodEnum method;
    public SettingValueResponseWrapper withMethod(SettingValueResponseWrapperMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public SettingValueResponse response;
    public SettingValueResponseWrapper withResponse(SettingValueResponse response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SettingValueResponseWrapper withUrl(String url) {
        this.url = url;
        return this;
    }
}