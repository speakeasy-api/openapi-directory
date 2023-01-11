package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PasswordCredentialsUpdateParameters
 * Request parameters for a PasswordCredentials update operation.
**/
public class PasswordCredentialsUpdateParameters {
    @JsonProperty("value")
    public java.util.Map<String, java.util.Map<String, Object>>[] value;
    public PasswordCredentialsUpdateParameters withValue(java.util.Map<String, java.util.Map<String, Object>>[] value) {
        this.value = value;
        return this;
    }
}