package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetMessagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=anotherUserId")
    public Integer anotherUserId;
    public UserApiGetMessagesQueryParams withAnotherUserId(Integer anotherUserId) {
        this.anotherUserId = anotherUserId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public UserApiGetMessagesQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inbox")
    public UserApiGetMessagesInboxEnum inbox;
    public UserApiGetMessagesQueryParams withInbox(UserApiGetMessagesInboxEnum inbox) {
        this.inbox = inbox;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public UserApiGetMessagesQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public UserApiGetMessagesQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unread")
    public Boolean unread;
    public UserApiGetMessagesQueryParams withUnread(Boolean unread) {
        this.unread = unread;
        return this;
    }
}