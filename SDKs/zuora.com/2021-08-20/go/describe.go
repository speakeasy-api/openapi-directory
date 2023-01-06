package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Describe struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDescribe(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Describe {
	return &Describe{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetDescribe - Describe an object
// Provides a reference listing of each object that is available in your Zuora tenant.
//
// The information returned by this call is useful if you are using [CRUD: Create Export](https://www.zuora.com/developer/api-reference/#operation/Object_POSTExport) or the [AQuA API](https://knowledgecenter.zuora.com/DC_Developers/T_Aggregate_Query_API) to create a data source export. See [Export ZOQL](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) for more information.
//
// ## Response
// The response contains an XML document that lists the fields of the specified object. Each of the object's fields is represented by a `<field>` element in the XML document.
//
// Each `<field>` element contains the following elements:
//
// | Element      | Description                                                                                                                                                                                                                                                                                  |
// |--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
// | `<name>`     | API name of the field.                                                                                                                                                                                                                                                                       |
// | `<label>`    | Name of the field in the Zuora user interface.                                                                                                                                                                                                                                               |
// | `<type>`     | Data type of the field. The possible data types are: `boolean`, `date`, `datetime`, `decimal`, `integer`, `picklist`, `text`, `timestamp`, and `ZOQL`. If the data type is `picklist`, the `<field>` element contains an `<options>` element that lists the possible values of the field.    |
// | `<contexts>` | Specifies the availability of the field. If the `<contexts>` element lists the `export` context, the field is available for use in data source exports.                                                                                                                                                |
//
// The `<field>` element contains other elements that provide legacy information about the field. This information is not directly related to the REST API.
//
// Response sample:
// ```xml
// <?xml version="1.0" encoding="UTF-8"?>
// <object>
//
//	<name>ProductRatePlanCharge</name>
//	<label>Product Rate Plan Charge</label>
//	<fields>
//	  ...
//	  <field>
//	    <name>TaxMode</name>
//	    <label>Tax Mode</label>
//	    <type>picklist</type>
//	    <options>
//	      <option>TaxExclusive</option>
//	      <option>TaxInclusive</option>
//	    </options>
//	    <contexts>
//	      <context>export</context>
//	    </contexts>
//	    ...
//	  </field>
//	  ...
//	</fields>
//
// </object>
// ```
//
// It is strongly recommended that your integration checks `<contexts>` elements in the response. If your integration does not check `<contexts>` elements, your integration may process fields that are not available for use in data source exports. See [Changes to the Describe API](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL/Changes_to_the_Describe_API) for more information.
func (s *Describe) GetDescribe(ctx context.Context, request operations.GetDescribeRequest) (*operations.GetDescribeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/describe/{object}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDescribeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `text/xml; charset=utf-8`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GETDescribe200TextXMLString = &out
		}
	case httpRes.StatusCode == 404:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `text/xml; charset=utf-8`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GETDescribe404TextXMLString = &out
		}
	}

	return res, nil
}
