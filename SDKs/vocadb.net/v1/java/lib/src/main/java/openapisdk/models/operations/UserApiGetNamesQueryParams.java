package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetNamesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeDisabled")
    public Boolean includeDisabled;
    public UserApiGetNamesQueryParams withIncludeDisabled(Boolean includeDisabled) {
        this.includeDisabled = includeDisabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public UserApiGetNamesQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public UserApiGetNamesNameMatchModeEnum nameMatchMode;
    public UserApiGetNamesQueryParams withNameMatchMode(UserApiGetNamesNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public UserApiGetNamesQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}