package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlaceComplexBetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=exclude")
    public String[] exclude;
    public PlaceComplexBetQueryParams withExclude(String[] exclude) {
        this.exclude = exclude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public String[] fields;
    public PlaceComplexBetQueryParams withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=include")
    public String[] include;
    public PlaceComplexBetQueryParams withInclude(String[] include) {
        this.include = include;
        return this;
    }
}