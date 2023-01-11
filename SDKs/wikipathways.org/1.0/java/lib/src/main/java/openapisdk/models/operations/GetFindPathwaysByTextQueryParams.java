package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFindPathwaysByTextQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetFindPathwaysByTextFormatEnum format;
    public GetFindPathwaysByTextQueryParams withFormat(GetFindPathwaysByTextFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetFindPathwaysByTextQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=species")
    public String species;
    public GetFindPathwaysByTextQueryParams withSpecies(String species) {
        this.species = species;
        return this;
    }
}