package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ActivityEntryApiGetListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public OffsetDateTime before;
    public ActivityEntryApiGetListQueryParams withBefore(OffsetDateTime before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=editEvent")
    public ActivityEntryApiGetListEditEventEnum editEvent;
    public ActivityEntryApiGetListQueryParams withEditEvent(ActivityEntryApiGetListEditEventEnum editEvent) {
        this.editEvent = editEvent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entryFields")
    public ActivityEntryApiGetListEntryFieldsEnum entryFields;
    public ActivityEntryApiGetListQueryParams withEntryFields(ActivityEntryApiGetListEntryFieldsEnum entryFields) {
        this.entryFields = entryFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entryType")
    public ActivityEntryApiGetListEntryTypeEnum entryType;
    public ActivityEntryApiGetListQueryParams withEntryType(ActivityEntryApiGetListEntryTypeEnum entryType) {
        this.entryType = entryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public ActivityEntryApiGetListFieldsEnum fields;
    public ActivityEntryApiGetListQueryParams withFields(ActivityEntryApiGetListFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public ActivityEntryApiGetListQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public ActivityEntryApiGetListLangEnum lang;
    public ActivityEntryApiGetListQueryParams withLang(ActivityEntryApiGetListLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public ActivityEntryApiGetListQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public OffsetDateTime since;
    public ActivityEntryApiGetListQueryParams withSince(OffsetDateTime since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortRule")
    public ActivityEntryApiGetListSortRuleEnum sortRule;
    public ActivityEntryApiGetListQueryParams withSortRule(ActivityEntryApiGetListSortRuleEnum sortRule) {
        this.sortRule = sortRule;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public Integer userId;
    public ActivityEntryApiGetListQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}