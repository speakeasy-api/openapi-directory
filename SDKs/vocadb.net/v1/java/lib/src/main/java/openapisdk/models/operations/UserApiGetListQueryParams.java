package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public UserApiGetListFieldsEnum fields;
    public UserApiGetListQueryParams withFields(UserApiGetListFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public UserApiGetListQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groups")
    public UserApiGetListGroupsEnum groups;
    public UserApiGetListQueryParams withGroups(UserApiGetListGroupsEnum groups) {
        this.groups = groups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeDisabled")
    public Boolean includeDisabled;
    public UserApiGetListQueryParams withIncludeDisabled(Boolean includeDisabled) {
        this.includeDisabled = includeDisabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=joinDateAfter")
    public OffsetDateTime joinDateAfter;
    public UserApiGetListQueryParams withJoinDateAfter(OffsetDateTime joinDateAfter) {
        this.joinDateAfter = joinDateAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=joinDateBefore")
    public OffsetDateTime joinDateBefore;
    public UserApiGetListQueryParams withJoinDateBefore(OffsetDateTime joinDateBefore) {
        this.joinDateBefore = joinDateBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=knowsLanguage")
    public String knowsLanguage;
    public UserApiGetListQueryParams withKnowsLanguage(String knowsLanguage) {
        this.knowsLanguage = knowsLanguage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public UserApiGetListQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public UserApiGetListNameMatchModeEnum nameMatchMode;
    public UserApiGetListQueryParams withNameMatchMode(UserApiGetListNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onlyVerified")
    public Boolean onlyVerified;
    public UserApiGetListQueryParams withOnlyVerified(Boolean onlyVerified) {
        this.onlyVerified = onlyVerified;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public UserApiGetListQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public UserApiGetListSortEnum sort;
    public UserApiGetListQueryParams withSort(UserApiGetListSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public UserApiGetListQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}