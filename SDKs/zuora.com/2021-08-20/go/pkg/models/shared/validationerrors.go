package shared

type ValidationErrors struct {
	Reasons []ValidationReasons `json:"reasons,omitempty"`
	Success *bool               `json:"success,omitempty"`
}
