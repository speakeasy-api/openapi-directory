package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAdminMappingsStubMappingId200ApplicationJsonRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials basicAuthCredentials;
    public GetAdminMappingsStubMappingId200ApplicationJsonRequest withBasicAuthCredentials(GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bodyPatterns")
    public java.util.Map<String, Object>[] bodyPatterns;
    public GetAdminMappingsStubMappingId200ApplicationJsonRequest withBodyPatterns(java.util.Map<String, Object>[] bodyPatterns) {
        this.bodyPatterns = bodyPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookies")
    public java.util.Map<String, Object> cookies;
    public GetAdminMappingsStubMappingId200ApplicationJsonRequest withCookies(java.util.Map<String, Object> cookies) {
        this.cookies = cookies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, Object> headers;
    public GetAdminMappingsStubMappingId200ApplicationJsonRequest withHeaders(java.util.Map<String, Object> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public GetAdminMappingsStubMappingId200ApplicationJsonRequest withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryParameters")
    public java.util.Map<String, Object> queryParameters;
    public GetAdminMappingsStubMappingId200ApplicationJsonRequest withQueryParameters(java.util.Map<String, Object> queryParameters) {
        this.queryParameters = queryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetAdminMappingsStubMappingId200ApplicationJsonRequest withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPath")
    public String urlPath;
    public GetAdminMappingsStubMappingId200ApplicationJsonRequest withUrlPath(String urlPath) {
        this.urlPath = urlPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPathPattern")
    public String urlPathPattern;
    public GetAdminMappingsStubMappingId200ApplicationJsonRequest withUrlPathPattern(String urlPathPattern) {
        this.urlPathPattern = urlPathPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPattern")
    public String urlPattern;
    public GetAdminMappingsStubMappingId200ApplicationJsonRequest withUrlPattern(String urlPattern) {
        this.urlPattern = urlPattern;
        return this;
    }
}