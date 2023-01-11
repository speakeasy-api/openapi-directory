package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConfigsNotificationEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callbackUrl")
    public String callbackUrl;
    public CreateConfigsNotificationEvent withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
}