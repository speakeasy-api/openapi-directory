package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials basicAuthCredentials;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest withBasicAuthCredentials(PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bodyPatterns")
    public java.util.Map<String, Object>[] bodyPatterns;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest withBodyPatterns(java.util.Map<String, Object>[] bodyPatterns) {
        this.bodyPatterns = bodyPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookies")
    public java.util.Map<String, Object> cookies;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest withCookies(java.util.Map<String, Object> cookies) {
        this.cookies = cookies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, Object> headers;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest withHeaders(java.util.Map<String, Object> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryParameters")
    public java.util.Map<String, Object> queryParameters;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest withQueryParameters(java.util.Map<String, Object> queryParameters) {
        this.queryParameters = queryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPath")
    public String urlPath;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest withUrlPath(String urlPath) {
        this.urlPath = urlPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPathPattern")
    public String urlPathPattern;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest withUrlPathPattern(String urlPathPattern) {
        this.urlPathPattern = urlPathPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPattern")
    public String urlPattern;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest withUrlPattern(String urlPattern) {
        this.urlPattern = urlPattern;
        return this;
    }
}