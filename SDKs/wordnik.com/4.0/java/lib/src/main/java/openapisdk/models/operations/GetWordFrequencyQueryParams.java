package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWordFrequencyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endYear")
    public Integer endYear;
    public GetWordFrequencyQueryParams withEndYear(Integer endYear) {
        this.endYear = endYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startYear")
    public Integer startYear;
    public GetWordFrequencyQueryParams withStartYear(Integer startYear) {
        this.startYear = startYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useCanonical")
    public GetWordFrequencyUseCanonicalEnum useCanonical;
    public GetWordFrequencyQueryParams withUseCanonical(GetWordFrequencyUseCanonicalEnum useCanonical) {
        this.useCanonical = useCanonical;
        return this;
    }
}