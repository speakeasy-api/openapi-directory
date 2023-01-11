package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostQuoteDocType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiuser")
    public String apiuser;
    public PostQuoteDocType withApiuser(String apiuser) {
        this.apiuser = apiuser;
        return this;
    }
    @JsonProperty("documentType")
    public String documentType;
    public PostQuoteDocType withDocumentType(String documentType) {
        this.documentType = documentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public PostQuoteDocType withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public PostQuoteDocType withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("quoteId")
    public String quoteId;
    public PostQuoteDocType withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sandbox")
    public String sandbox;
    public PostQuoteDocType withSandbox(String sandbox) {
        this.sandbox = sandbox;
        return this;
    }
    @JsonProperty("serverUrl")
    public String serverUrl;
    public PostQuoteDocType withServerUrl(String serverUrl) {
        this.serverUrl = serverUrl;
        return this;
    }
    @JsonProperty("sessionId")
    public String sessionId;
    public PostQuoteDocType withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonProperty("templateId")
    public String templateId;
    public PostQuoteDocType withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public PostQuoteDocType withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useSFDCLocale")
    public String useSFDCLocale;
    public PostQuoteDocType withUseSfdcLocale(String useSFDCLocale) {
        this.useSFDCLocale = useSFDCLocale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public PostQuoteDocType withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zquotesMajorVersion")
    public String zquotesMajorVersion;
    public PostQuoteDocType withZquotesMajorVersion(String zquotesMajorVersion) {
        this.zquotesMajorVersion = zquotesMajorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zquotesMinorVersion")
    public String zquotesMinorVersion;
    public PostQuoteDocType withZquotesMinorVersion(String zquotesMinorVersion) {
        this.zquotesMinorVersion = zquotesMinorVersion;
        return this;
    }
}