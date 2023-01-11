package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previewNumberOfPeriods")
    public Long previewNumberOfPeriods;
    public PreviewOptions withPreviewNumberOfPeriods(Long previewNumberOfPeriods) {
        this.previewNumberOfPeriods = previewNumberOfPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previewThruType")
    public PreviewOptionsPreviewThruTypeEnum previewThruType;
    public PreviewOptions withPreviewThruType(PreviewOptionsPreviewThruTypeEnum previewThruType) {
        this.previewThruType = previewThruType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previewTypes")
    public PreviewOptionsPreviewTypesEnum[] previewTypes;
    public PreviewOptions withPreviewTypes(PreviewOptionsPreviewTypesEnum[] previewTypes) {
        this.previewTypes = previewTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificPreviewThruDate")
    public LocalDate specificPreviewThruDate;
    public PreviewOptions withSpecificPreviewThruDate(LocalDate specificPreviewThruDate) {
        this.specificPreviewThruDate = specificPreviewThruDate;
        return this;
    }
}