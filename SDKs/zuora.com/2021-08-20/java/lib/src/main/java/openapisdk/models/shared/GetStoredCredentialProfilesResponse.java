package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStoredCredentialProfilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profiles")
    public GetStoredCredentialProfilesResponseProfiles profiles;
    public GetStoredCredentialProfilesResponse withProfiles(GetStoredCredentialProfilesResponseProfiles profiles) {
        this.profiles = profiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetStoredCredentialProfilesResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}