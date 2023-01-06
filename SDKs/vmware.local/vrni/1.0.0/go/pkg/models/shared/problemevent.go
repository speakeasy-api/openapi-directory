package shared

type ProblemEventSeverityEnum string

const (
	ProblemEventSeverityEnumCritical ProblemEventSeverityEnum = "CRITICAL"
	ProblemEventSeverityEnumModerate ProblemEventSeverityEnum = "MODERATE"
	ProblemEventSeverityEnumWarning  ProblemEventSeverityEnum = "WARNING"
	ProblemEventSeverityEnumInfo     ProblemEventSeverityEnum = "INFO"
)

type ProblemEvent struct {
	EventCloseTimeEpochMs *int64                    `json:"event_close_time_epoch_ms,omitempty"`
	Severity              *ProblemEventSeverityEnum `json:"severity,omitempty"`
}
