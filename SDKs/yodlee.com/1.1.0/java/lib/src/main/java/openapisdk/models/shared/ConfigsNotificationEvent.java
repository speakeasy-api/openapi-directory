package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigsNotificationEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callbackUrl")
    public String callbackUrl;
    public ConfigsNotificationEvent withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public ConfigsNotificationEventNameEnum name;
    public ConfigsNotificationEvent withName(ConfigsNotificationEventNameEnum name) {
        this.name = name;
        return this;
    }
}