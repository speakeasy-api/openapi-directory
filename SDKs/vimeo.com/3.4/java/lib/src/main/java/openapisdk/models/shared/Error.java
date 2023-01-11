package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Error {
    @JsonProperty("developer_message")
    public String developerMessage;
    public Error withDeveloperMessage(String developerMessage) {
        this.developerMessage = developerMessage;
        return this;
    }
    @JsonProperty("error")
    public String error;
    public Error withError(String error) {
        this.error = error;
        return this;
    }
    @JsonProperty("error_code")
    public Double errorCode;
    public Error withErrorCode(Double errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public Error withLink(String link) {
        this.link = link;
        return this;
    }
}