package shared

import (
	"time"
)

type PreviewOptionsPreviewThruTypeEnum string

const (
	PreviewOptionsPreviewThruTypeEnumSpecificDate    PreviewOptionsPreviewThruTypeEnum = "SpecificDate"
	PreviewOptionsPreviewThruTypeEnumTermEnd         PreviewOptionsPreviewThruTypeEnum = "TermEnd"
	PreviewOptionsPreviewThruTypeEnumNumberOfPeriods PreviewOptionsPreviewThruTypeEnum = "NumberOfPeriods"
)

type PreviewOptionsPreviewTypesEnum string

const (
	PreviewOptionsPreviewTypesEnumChargeMetrics     PreviewOptionsPreviewTypesEnum = "ChargeMetrics"
	PreviewOptionsPreviewTypesEnumBillingDocs       PreviewOptionsPreviewTypesEnum = "BillingDocs"
	PreviewOptionsPreviewTypesEnumOrderDeltaMetrics PreviewOptionsPreviewTypesEnum = "OrderDeltaMetrics"
	PreviewOptionsPreviewTypesEnumOrderMetrics      PreviewOptionsPreviewTypesEnum = "OrderMetrics"
	PreviewOptionsPreviewTypesEnumRampMetrics       PreviewOptionsPreviewTypesEnum = "RampMetrics"
	PreviewOptionsPreviewTypesEnumRampDeltaMetrics  PreviewOptionsPreviewTypesEnum = "RampDeltaMetrics"
)

type PreviewOptions struct {
	PreviewNumberOfPeriods  *int64                             `json:"previewNumberOfPeriods,omitempty"`
	PreviewThruType         *PreviewOptionsPreviewThruTypeEnum `json:"previewThruType,omitempty"`
	PreviewTypes            []PreviewOptionsPreviewTypesEnum   `json:"previewTypes,omitempty"`
	SpecificPreviewThruDate *time.Time                         `json:"specificPreviewThruDate,omitempty"`
}
