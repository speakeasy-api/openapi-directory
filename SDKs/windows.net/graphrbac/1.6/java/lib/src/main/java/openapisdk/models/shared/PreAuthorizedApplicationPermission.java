package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreAuthorizedApplicationPermission
 * Contains information about the pre-authorized permissions.
**/
public class PreAuthorizedApplicationPermission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessGrants")
    public String[] accessGrants;
    public PreAuthorizedApplicationPermission withAccessGrants(String[] accessGrants) {
        this.accessGrants = accessGrants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directAccessGrant")
    public Boolean directAccessGrant;
    public PreAuthorizedApplicationPermission withDirectAccessGrant(Boolean directAccessGrant) {
        this.directAccessGrant = directAccessGrant;
        return this;
    }
}