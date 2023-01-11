package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteChatMessageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to_channel")
    public String toChannel;
    public DeleteChatMessageQueryParams withToChannel(String toChannel) {
        this.toChannel = toChannel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to_contact")
    public String toContact;
    public DeleteChatMessageQueryParams withToContact(String toContact) {
        this.toContact = toContact;
        return this;
    }
}