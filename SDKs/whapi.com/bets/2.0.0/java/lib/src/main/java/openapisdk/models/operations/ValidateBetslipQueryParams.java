package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateBetslipQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expanded")
    public String expanded;
    public ValidateBetslipQueryParams withExpanded(String expanded) {
        this.expanded = expanded;
        return this;
    }
}