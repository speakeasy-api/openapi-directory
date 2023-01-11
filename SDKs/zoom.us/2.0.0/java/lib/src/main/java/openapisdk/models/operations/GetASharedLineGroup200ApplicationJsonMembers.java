package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetASharedLineGroup200ApplicationJsonMembers
 * View current [members](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups#h_3ffbbb77-a009-4c09-91e4-81fc264b61d6) of the shared line group.
**/
public class GetASharedLineGroup200ApplicationJsonMembers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("common_area_phones")
    public GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones[] commonAreaPhones;
    public GetASharedLineGroup200ApplicationJsonMembers withCommonAreaPhones(GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones[] commonAreaPhones) {
        this.commonAreaPhones = commonAreaPhones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public GetASharedLineGroup200ApplicationJsonMembersUsers[] users;
    public GetASharedLineGroup200ApplicationJsonMembers withUsers(GetASharedLineGroup200ApplicationJsonMembersUsers[] users) {
        this.users = users;
        return this;
    }
}