package shared

type BillingUpdateBillingPeriodAlignmentEnum string

const (
	BillingUpdateBillingPeriodAlignmentEnumAlignToCharge            BillingUpdateBillingPeriodAlignmentEnum = "AlignToCharge"
	BillingUpdateBillingPeriodAlignmentEnumAlignToSubscriptionStart BillingUpdateBillingPeriodAlignmentEnum = "AlignToSubscriptionStart"
	BillingUpdateBillingPeriodAlignmentEnumAlignToTermStart         BillingUpdateBillingPeriodAlignmentEnum = "AlignToTermStart"
)

type BillingUpdate struct {
	BillingPeriodAlignment *BillingUpdateBillingPeriodAlignmentEnum `json:"billingPeriodAlignment,omitempty"`
}
