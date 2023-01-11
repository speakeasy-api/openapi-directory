package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminMappingsRequestBodyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public PostAdminMappingsRequestBodyRequestBasicAuthCredentials basicAuthCredentials;
    public PostAdminMappingsRequestBodyRequest withBasicAuthCredentials(PostAdminMappingsRequestBodyRequestBasicAuthCredentials basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bodyPatterns")
    public java.util.Map<String, Object>[] bodyPatterns;
    public PostAdminMappingsRequestBodyRequest withBodyPatterns(java.util.Map<String, Object>[] bodyPatterns) {
        this.bodyPatterns = bodyPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookies")
    public java.util.Map<String, Object> cookies;
    public PostAdminMappingsRequestBodyRequest withCookies(java.util.Map<String, Object> cookies) {
        this.cookies = cookies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, Object> headers;
    public PostAdminMappingsRequestBodyRequest withHeaders(java.util.Map<String, Object> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public PostAdminMappingsRequestBodyRequest withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryParameters")
    public java.util.Map<String, Object> queryParameters;
    public PostAdminMappingsRequestBodyRequest withQueryParameters(java.util.Map<String, Object> queryParameters) {
        this.queryParameters = queryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PostAdminMappingsRequestBodyRequest withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPath")
    public String urlPath;
    public PostAdminMappingsRequestBodyRequest withUrlPath(String urlPath) {
        this.urlPath = urlPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPathPattern")
    public String urlPathPattern;
    public PostAdminMappingsRequestBodyRequest withUrlPathPattern(String urlPathPattern) {
        this.urlPathPattern = urlPathPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPattern")
    public String urlPattern;
    public PostAdminMappingsRequestBodyRequest withUrlPattern(String urlPattern) {
        this.urlPattern = urlPattern;
        return this;
    }
}