package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlaceSingleBetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=exclude")
    public String[] exclude;
    public PlaceSingleBetQueryParams withExclude(String[] exclude) {
        this.exclude = exclude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public String[] fields;
    public PlaceSingleBetQueryParams withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=include")
    public String[] include;
    public PlaceSingleBetQueryParams withInclude(String[] include) {
        this.include = include;
        return this;
    }
}