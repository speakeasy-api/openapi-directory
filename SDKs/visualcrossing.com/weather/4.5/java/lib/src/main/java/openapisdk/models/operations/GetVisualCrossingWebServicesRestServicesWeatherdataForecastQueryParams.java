package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aggregateHours")
    public String aggregateHours;
    public GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams withAggregateHours(String aggregateHours) {
        this.aggregateHours = aggregateHours;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allowAsynch")
    public Boolean allowAsynch;
    public GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams withAllowAsynch(Boolean allowAsynch) {
        this.allowAsynch = allowAsynch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contentType")
    public String contentType;
    public GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locations")
    public String locations;
    public GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams withLocations(String locations) {
        this.locations = locations;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendAsDatasource")
    public Boolean sendAsDatasource;
    public GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams withSendAsDatasource(Boolean sendAsDatasource) {
        this.sendAsDatasource = sendAsDatasource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=shortColumnNames")
    public Boolean shortColumnNames;
    public GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams withShortColumnNames(Boolean shortColumnNames) {
        this.shortColumnNames = shortColumnNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unitGroup")
    public String unitGroup;
    public GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams withUnitGroup(String unitGroup) {
        this.unitGroup = unitGroup;
        return this;
    }
}