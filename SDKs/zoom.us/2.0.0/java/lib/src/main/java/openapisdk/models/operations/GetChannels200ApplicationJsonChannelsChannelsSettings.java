package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChannels200ApplicationJsonChannelsChannelsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_to_add_external_users")
    public Long allowToAddExternalUsers;
    public GetChannels200ApplicationJsonChannelsChannelsSettings withAllowToAddExternalUsers(Long allowToAddExternalUsers) {
        this.allowToAddExternalUsers = allowToAddExternalUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_members_can_see_previous_messages_files")
    public Boolean newMembersCanSeePreviousMessagesFiles;
    public GetChannels200ApplicationJsonChannelsChannelsSettings withNewMembersCanSeePreviousMessagesFiles(Boolean newMembersCanSeePreviousMessagesFiles) {
        this.newMembersCanSeePreviousMessagesFiles = newMembersCanSeePreviousMessagesFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posting_permissions")
    public Long postingPermissions;
    public GetChannels200ApplicationJsonChannelsChannelsSettings withPostingPermissions(Long postingPermissions) {
        this.postingPermissions = postingPermissions;
        return this;
    }
}