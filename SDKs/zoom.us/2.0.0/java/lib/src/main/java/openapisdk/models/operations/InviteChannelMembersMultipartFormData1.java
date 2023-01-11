package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InviteChannelMembersMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=members,json")
    public InviteChannelMembersMultipartFormDataMembers[] members;
    public InviteChannelMembersMultipartFormData1 withMembers(InviteChannelMembersMultipartFormDataMembers[] members) {
        this.members = members;
        return this;
    }
}