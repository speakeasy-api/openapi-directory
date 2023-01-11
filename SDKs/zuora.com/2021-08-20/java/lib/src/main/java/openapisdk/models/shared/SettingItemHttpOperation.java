package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingItemHttpOperation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public SettingItemHttpOperationMethodEnum method;
    public SettingItemHttpOperation withMethod(SettingItemHttpOperationMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public SettingItemHttpRequestParameter[] parameters;
    public SettingItemHttpOperation withParameters(SettingItemHttpRequestParameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestType")
    public java.util.Map<String, Object> requestType;
    public SettingItemHttpOperation withRequestType(java.util.Map<String, Object> requestType) {
        this.requestType = requestType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseType")
    public java.util.Map<String, Object> responseType;
    public SettingItemHttpOperation withResponseType(java.util.Map<String, Object> responseType) {
        this.responseType = responseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SettingItemHttpOperation withUrl(String url) {
        this.url = url;
        return this;
    }
}