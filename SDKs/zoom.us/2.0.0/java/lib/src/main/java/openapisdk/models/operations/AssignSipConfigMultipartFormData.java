package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignSipConfigMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=enable")
    public Boolean enable;
    public AssignSipConfigMultipartFormData withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=show_callout_internal_number")
    public Boolean showCalloutInternalNumber;
    public AssignSipConfigMultipartFormData withShowCalloutInternalNumber(Boolean showCalloutInternalNumber) {
        this.showCalloutInternalNumber = showCalloutInternalNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=show_zoom_provided_callout_countries")
    public Long showZoomProvidedCalloutCountries;
    public AssignSipConfigMultipartFormData withShowZoomProvidedCalloutCountries(Long showZoomProvidedCalloutCountries) {
        this.showZoomProvidedCalloutCountries = showZoomProvidedCalloutCountries;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=show_zoom_provided_numbers")
    public Long showZoomProvidedNumbers;
    public AssignSipConfigMultipartFormData withShowZoomProvidedNumbers(Long showZoomProvidedNumbers) {
        this.showZoomProvidedNumbers = showZoomProvidedNumbers;
        return this;
    }
}