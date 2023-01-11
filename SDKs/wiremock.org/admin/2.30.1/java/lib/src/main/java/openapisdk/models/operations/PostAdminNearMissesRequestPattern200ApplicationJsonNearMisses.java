package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("absoluteUrl")
    public String absoluteUrl;
    public PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses withAbsoluteUrl(String absoluteUrl) {
        this.absoluteUrl = absoluteUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookies")
    public java.util.Map<String, Object> cookies;
    public PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses withCookies(java.util.Map<String, Object> cookies) {
        this.cookies = cookies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, Object> headers;
    public PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses withHeaders(java.util.Map<String, Object> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses withUrl(String url) {
        this.url = url;
        return this;
    }
}