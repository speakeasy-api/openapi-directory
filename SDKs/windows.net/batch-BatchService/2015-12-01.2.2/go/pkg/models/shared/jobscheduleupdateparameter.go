// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// JobScheduleUpdateParameter - Parameters for a CloudJobScheduleOperations.Update request.
type JobScheduleUpdateParameter struct {
	// Specifies details of the jobs to be created on a schedule.
	JobSpecification JobSpecification `json:"jobSpecification"`
	// Sets a list of name-value pairs associated with the job schedule as metadata. If you do not specify this element, it takes the default value of an empty list; in effect, any existing metadata is deleted.
	Metadata []MetadataItem `json:"metadata,omitempty"`
	// The schedule according to which jobs will be created
	Schedule Schedule `json:"schedule"`
}
