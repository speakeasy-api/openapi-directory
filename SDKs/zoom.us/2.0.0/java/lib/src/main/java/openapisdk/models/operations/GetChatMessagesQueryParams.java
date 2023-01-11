package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetChatMessagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public LocalDate date;
    public GetChatMessagesQueryParams withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_deleted_and_edited_message")
    public String includeDeletedAndEditedMessage;
    public GetChatMessagesQueryParams withIncludeDeletedAndEditedMessage(String includeDeletedAndEditedMessage) {
        this.includeDeletedAndEditedMessage = includeDeletedAndEditedMessage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public GetChatMessagesQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetChatMessagesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to_channel")
    public String toChannel;
    public GetChatMessagesQueryParams withToChannel(String toChannel) {
        this.toChannel = toChannel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to_contact")
    public String toContact;
    public GetChatMessagesQueryParams withToContact(String toContact) {
        this.toContact = toContact;
        return this;
    }
}