package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VenueApiGetListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distanceUnit")
    public VenueApiGetListDistanceUnitEnum distanceUnit;
    public VenueApiGetListQueryParams withDistanceUnit(VenueApiGetListDistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public VenueApiGetListFieldsEnum fields;
    public VenueApiGetListQueryParams withFields(VenueApiGetListFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getTotalCount")
    public Boolean getTotalCount;
    public VenueApiGetListQueryParams withGetTotalCount(Boolean getTotalCount) {
        this.getTotalCount = getTotalCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public VenueApiGetListLangEnum lang;
    public VenueApiGetListQueryParams withLang(VenueApiGetListLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latitude")
    public Double latitude;
    public VenueApiGetListQueryParams withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longitude")
    public Double longitude;
    public VenueApiGetListQueryParams withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Integer maxResults;
    public VenueApiGetListQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public VenueApiGetListNameMatchModeEnum nameMatchMode;
    public VenueApiGetListQueryParams withNameMatchMode(VenueApiGetListNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public VenueApiGetListQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Double radius;
    public VenueApiGetListQueryParams withRadius(Double radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortRule")
    public VenueApiGetListSortRuleEnum sortRule;
    public VenueApiGetListQueryParams withSortRule(VenueApiGetListSortRuleEnum sortRule) {
        this.sortRule = sortRule;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public VenueApiGetListQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}