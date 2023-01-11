package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminRecordingsStartRequestBodyFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAuthCredentials")
    public PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials basicAuthCredentials;
    public PostAdminRecordingsStartRequestBodyFilters withBasicAuthCredentials(PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials basicAuthCredentials) {
        this.basicAuthCredentials = basicAuthCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bodyPatterns")
    public java.util.Map<String, Object>[] bodyPatterns;
    public PostAdminRecordingsStartRequestBodyFilters withBodyPatterns(java.util.Map<String, Object>[] bodyPatterns) {
        this.bodyPatterns = bodyPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookies")
    public java.util.Map<String, Object> cookies;
    public PostAdminRecordingsStartRequestBodyFilters withCookies(java.util.Map<String, Object> cookies) {
        this.cookies = cookies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, Object> headers;
    public PostAdminRecordingsStartRequestBodyFilters withHeaders(java.util.Map<String, Object> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public PostAdminRecordingsStartRequestBodyFilters withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryParameters")
    public java.util.Map<String, Object> queryParameters;
    public PostAdminRecordingsStartRequestBodyFilters withQueryParameters(java.util.Map<String, Object> queryParameters) {
        this.queryParameters = queryParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PostAdminRecordingsStartRequestBodyFilters withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPath")
    public String urlPath;
    public PostAdminRecordingsStartRequestBodyFilters withUrlPath(String urlPath) {
        this.urlPath = urlPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPathPattern")
    public String urlPathPattern;
    public PostAdminRecordingsStartRequestBodyFilters withUrlPathPattern(String urlPathPattern) {
        this.urlPathPattern = urlPathPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlPattern")
    public String urlPattern;
    public PostAdminRecordingsStartRequestBodyFilters withUrlPattern(String urlPattern) {
        this.urlPattern = urlPattern;
        return this;
    }
}