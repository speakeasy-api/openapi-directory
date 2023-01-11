package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventSeriesApiGetListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public ReleaseEventSeriesApiGetListFieldsEnum fields;
    public ReleaseEventSeriesApiGetListQueryParams withFields(ReleaseEventSeriesApiGetListFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public ReleaseEventSeriesApiGetListQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public ReleaseEventSeriesApiGetListLangEnum lang;
    public ReleaseEventSeriesApiGetListQueryParams withLang(ReleaseEventSeriesApiGetListLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public ReleaseEventSeriesApiGetListQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public ReleaseEventSeriesApiGetListNameMatchModeEnum nameMatchMode;
    public ReleaseEventSeriesApiGetListQueryParams withNameMatchMode(ReleaseEventSeriesApiGetListNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public ReleaseEventSeriesApiGetListQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public ReleaseEventSeriesApiGetListQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}