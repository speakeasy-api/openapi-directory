// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type LeaveType struct {
	// Is the current record
	CurrentRecord *bool `json:"CurrentRecord,omitempty"`
	// Set this to indicate that an employee will be paid when taking this type of leave
	IsPaidLeave *bool `json:"IsPaidLeave,omitempty"`
	// Enter an amount here if your organisation pays an additional percentage on top of ordinary earnings when your employees take leave (typically 17.5%)
	LeaveLoadingRate *float64 `json:"LeaveLoadingRate,omitempty"`
	// Xero identifier
	LeaveTypeID *string `json:"LeaveTypeID,omitempty"`
	// Name of the earnings rate (max length = 100)
	Name *string `json:"Name,omitempty"`
	// The number of units the employee is entitled to each year
	NormalEntitlement *float64 `json:"NormalEntitlement,omitempty"`
	// Set this if you want a balance for this leave type to be shown on your employee’s payslips
	ShowOnPayslip *bool `json:"ShowOnPayslip,omitempty"`
	// The type of units by which leave entitlements are normally tracked. These are typically the same as the type of units used for the employee’s ordinary earnings rate
	TypeOfUnits *string `json:"TypeOfUnits,omitempty"`
	// Last modified timestamp
	UpdatedDateUTC *string `json:"UpdatedDateUTC,omitempty"`
}

type LeaveTypeInput struct {
	// Is the current record
	CurrentRecord *bool `json:"CurrentRecord,omitempty"`
	// Set this to indicate that an employee will be paid when taking this type of leave
	IsPaidLeave *bool `json:"IsPaidLeave,omitempty"`
	// Enter an amount here if your organisation pays an additional percentage on top of ordinary earnings when your employees take leave (typically 17.5%)
	LeaveLoadingRate *float64 `json:"LeaveLoadingRate,omitempty"`
	// Xero identifier
	LeaveTypeID *string `json:"LeaveTypeID,omitempty"`
	// Name of the earnings rate (max length = 100)
	Name *string `json:"Name,omitempty"`
	// The number of units the employee is entitled to each year
	NormalEntitlement *float64 `json:"NormalEntitlement,omitempty"`
	// Set this if you want a balance for this leave type to be shown on your employee’s payslips
	ShowOnPayslip *bool `json:"ShowOnPayslip,omitempty"`
	// The type of units by which leave entitlements are normally tracked. These are typically the same as the type of units used for the employee’s ordinary earnings rate
	TypeOfUnits *string `json:"TypeOfUnits,omitempty"`
}
