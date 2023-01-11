package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListimmessagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=channel")
    public String channel;
    public ListimmessagesQueryParams withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=chat_user")
    public String chatUser;
    public ListimmessagesQueryParams withChatUser(String chatUser) {
        this.chatUser = chatUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public ListimmessagesQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListimmessagesQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListimmessagesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}