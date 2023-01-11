package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NsxControllerDataCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controller_password")
    public String controllerPassword;
    public NsxControllerDataCollection withControllerPassword(String controllerPassword) {
        this.controllerPassword = controllerPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public NsxControllerDataCollection withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}